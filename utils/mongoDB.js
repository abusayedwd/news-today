 
 const mongoose = require('mongoose')


export const mongoDb = async () => {
    try{
        await mongoose.connect(process.env.DB_url)
        console.log('connent DB');
    }
    catch(error){
        console.log(error);
    }
}