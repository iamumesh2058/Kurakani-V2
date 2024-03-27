const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const RoomSchema = new mongoose.Schema({
    host: {
        type: ObjectId,
        ref: 'User'
    },
    topic: {
        type: ObjectId,
        ref: "Topic"
    },
    roomName: {
        type: String,
        required: true
    },
    description: String,
    participants: [{
        type: ObjectId,
        ref: "User"
    }],
}, {timestamps: true});

module.exports = mongoose.model("Room", RoomSchema);