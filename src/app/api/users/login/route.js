import { NextResponse } from 'next/server';
import User from '@/models/userModel';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const createToken = (id) => {
    return jwt.sign({ _id: id }, process.env.SEC, { expiresIn: '3d' }); //[cite: 15]
};

export async function POST(req) {
    try {
        await mongoose.connect(process.env.MONGOURL); // Replace your server.js connect logic[cite: 19]
        
        const { name, password } = await req.json();
        const user = await User.login(name, password); //[cite: 15]
        const token = createToken(user._id);
        
        return NextResponse.json({ ...user.toObject(), token }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 404 });
    }
}