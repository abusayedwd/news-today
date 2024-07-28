
import User from "@/models/userModel";
import { connectDb } from "@/utils/connect"
import { message } from "antd";
import { NextResponse } from "next/server";
const bcrypt = require('bcrypt');

export async function Post(req) {
    try{
        await connectDb()
        const {name, email, password} = await req.json();
        const exist = await User.findOne({$or:[{name}, {email}]});
        if(exist){
            return ( 
            NextResponse.json({message: 'email or name alreay exist'}),
            {status:500}
            );
        }
        const hasedPassword = await bcrypt.hash(password, 10);
        await User.create({email,name, password: hasedPassword})
        return NextResponse.json({message: 'User registered.'}), {status:201};
        console.log(name, email, password);
    }
    catch(error){
        return NextResponse.json({message: "Error created"})
        console.log(error);
    }
}