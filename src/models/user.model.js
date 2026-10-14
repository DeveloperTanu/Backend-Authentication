const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:[true, "Username is requied"],
        unique:[true, "Username must be unique"],
    },
    email:{
        type:String,
        required:[true, "Email is requied"],
        unique:[true, "Email must be unique"],
    },
    password:{
        type:String,
        required:[true, "Password is requied"],
    }
})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
