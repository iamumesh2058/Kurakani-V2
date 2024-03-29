const Message = require("../models/message.model");


// create message
exports.createMessage = async (req, res) => {
    req.body.user = req.user.userId;
    const message = await Message.create(req.body);
    res.status(201).json({ msg: "Message sent", message: message });
}


// get five message
exports.getFiveMessages = async (req, res) => {
    const messages = await Message.find().sort("-createdAt").limit(5).populate("user", "username").populate("room", "roomName");
    res.status(200).json({ messages });
}


// get message by room
exports.getMessageByRoom = async (req, res) => {
    const messages = await Message.find({ room: req.params.id }).populate("user", "username").populate("room", "roomName");
    res.status(200).json({ messages });
}


// delete message
exports.deleteMessage = async (req, res) => {
    const message = await Message.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Message deleted" });
}