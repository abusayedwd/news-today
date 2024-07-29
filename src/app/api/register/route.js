
import { NextResponse } from "next/server";
 
 
import bcrypt from 'bcryptjs';
import { mongoDb } from "../../../../utils/mongoDB";
import User from "../../../../models/user";
 

export async function POST(req, res) {
    try {
        const { name, email, password } = await req.json();
        console.log('Name:', name, "Email:", email, "Password:", password);
        await mongoDb();
        const hasedPassword = await bcrypt.hash(password,10)
        await User.create({name, email, password:hasedPassword})

        return NextResponse.json({ message: 'User registered.' }, { status: 201 });
    } catch (error) {
        console.error(error);  // Log the error for debugging
        return NextResponse.json({ message: "Error occurred" }, { status: 500 });
    }
}
