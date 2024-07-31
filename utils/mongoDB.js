 
 const mongoose = require('mongoose')


export const mongoDb = async () => {
    try{
        await mongoose.connect(process.env.DB_url)
        console.log('connent DB atlas');
    }
    catch(error){
        console.log(error);
    }
}


// DB_url = mongodb+srv://abusayed:cmuqR8YB8DFatfyo@cluster0.nwoisw1.mongodb.net/Register
// NEXTAUTH_SECRET =  dfdfddgfgrdffdfrgfrrtrg
// AUTH_URL = https://news-today-chi.vercel.app/


// # cmuqR8YB8DFatfyo