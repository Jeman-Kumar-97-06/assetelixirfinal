import { NextResponse } from 'next/server';
import User from '@/models/userModel';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const createToken = (id) => {
    return jwt.sign({ _id: id }, process.env.SEC, { expiresIn: '3d' });
};

export async function POST(req) {
    try {
        // Ensure database connection
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.MONGODB_URI);
        }
        
        const { name, password } = await req.json();
        
        // Uses the static signup method from your userModel.js
        const user = await User.signup(name, password); 
        const token = createToken(user._id);
        
        return NextResponse.json({ ...user.toObject(), token }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}