import { NextResponse } from 'next/server';
import Blog from '@/models/blogModel';
import jwt from 'jsonwebtoken';
import { v2 as cloudinary } from 'cloudinary';
import mongoose from 'mongoose';

cloudinary.config({
    cloud_name: "dt0zcc0ec",
    api_key: '363287392839592',
    api_secret: process.env.API_SEC //[cite: 12]
});

export async function POST(req) {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        // 1. JWT Authentication extraction (replacing requireAuth.js[cite: 14])
        const authHeader = req.headers.get('authorization');
        if (!authHeader) return NextResponse.json({ error: "Authorization token required" }, { status: 401 });
        
        const token = authHeader.split(' ')[1];
        const { _id } = jwt.verify(token, process.env.SEC);

        // 2. Parse FormData
        const formData = await req.formData();
        const title = formData.get('title');
        const tags = formData.get('tags');
        const blogContent = formData.get('blogContent');
        const file = formData.get('blog_pic'); //[cite: 12, 20]

        if (!file) return NextResponse.json({ error: "No File Uploaded" }, { status: 400 });

        // 3. Convert file to buffer for Cloudinary memory upload
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadResult = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream((error, result) => {
                if (error) reject(error);
                else resolve(result);
            });
            stream.end(buffer);
        });

        // 4. Save to Database[cite: 12]
        const new_blog = await Blog.create({
            title, 
            tags, 
            blogContent, 
            blogPic: uploadResult.secure_url 
        });

        return NextResponse.json(new_blog, { status: 200 });

    } catch (err) {
        console.log('Upload Error:', err);
        return NextResponse.json({ error: err.message || "Upload Failed!" }, { status: 500 });
    }
}