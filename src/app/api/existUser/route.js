import { NextResponse } from "next/server";
import User from "../../../../models/user";
import { mongoDb } from "../../../../utils/mongoDB";


export async function POST(req) {

    try{
        const {email} = await req.json()
        await mongoDb();
       const user =  await User.findOne({email}).select('_id')
       console.log(user);
       return NextResponse.json({user})
    }
    catch(error){
        console.log(error);
    }
}