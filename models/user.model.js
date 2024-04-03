const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    bio:String,
    avatar: String,
    status: {
        type: String,
        default: "Offline"
    }
}, {timestamps: true});


module.exports = mongoose.model("User", userSchema);