 
const mongoose = require('mongoose')
require('dotenv').config()


 export async function connectDb(){
    try{
        await mongoose.connect(process.env.DB_url)
        console.log('mongodb connect now');
    }
    catch(error){
   console.log('error', error);
    }
  }