
// const mongoose = require('mongoose')

const mongoose = require("mongoose");

 

const userSchema = mongoose.Schema({
    userName: {
        type : String,
        required: [ ture, "name is required"],
        unique: [true, "name must be Unique"]
    },
    email: {
        type : String,
        required: [ ture, "email is required"],
        unique: [true, "email must be Unique"]
    },
    Password: {
        type : String,
        required: [ ture, "pawword is required"],
        unique: [true, "pawword must be Unique"]
    },
},
{
    timestamps: true
},
 
)

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User;
