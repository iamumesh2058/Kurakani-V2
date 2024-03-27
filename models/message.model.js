const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const MessageSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    room: {
        type: ObjectId,
        ref: "Room",
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Message", MessageSchema);