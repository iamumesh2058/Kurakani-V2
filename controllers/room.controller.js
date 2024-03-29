const { NotFoundError } = require("../errors/cutom.error");
const Room = require("../models/room.model");
const Topic = require("../models/topic.model");

// create topic
exports.createRoom = async (req, res) => {
    const topicName = await Topic.findOne({ topic: req.body.topic });
    if (!topicName) {
        const newTopic = await Topic.create({ topic: req.body.topic, numberOfRooms: 1 });
        req.body.topic = newTopic._id;
    }
    else {
        await Topic.findByIdAndUpdate(
            topicName._id,
            { numberOfRooms: topicName.numberOfRooms + 1 },
            { new: true }
        );
        req.body.topic = topicName._id;
    }
    req.body.host = req.user.userId;

    const participants = [req.user.userId];
    req.body.participants = participants;
    const newRoom = await Room.create(req.body);
    res.status(201).json({ msg: "Room created", topic: newRoom });
}


// get all rooms
exports.getAllRooms = async (req, res) => {
    const rooms = await Room.find().sort("-createddAt").populate("host", ["username", "email"]).populate('topic', 'topic').populate("participants", ['username', "email"]);
    res.status(200).json({ rooms });
}


// get single room
exports.getSingleRoom = async (req, res) => {
    const room = await Room.findById(req.params.id).populate("host", ["username", "email"]).populate('topic', 'topic').populate("participants", ['username', "email"]);
    if (!room) throw new NotFoundError(`No room with id ${req.params.id}`);
    res.status(200).json({ room });
}


// update room
exports.updateRoom = async (req, res) => {
    const room = await Room.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!room) throw new NotFoundError(`No room with id ${req.params.id}`);
    res.status(200).json({ msg: "Room updated successfully", room: room });
}


// delete room
exports.deleteRoom = async (req, res) => {
    const room = await Room.findById(req.params.id);
    const topic = await Topic.findById(room.topic);
    await Topic.findByIdAndUpdate(
        topic._id,
        { numberOfRooms: topic.numberOfRooms - 1 },
        { new: true }
    );
    await Room.findByIdAndDelete(req.params.id);
    if (!room) throw new NotFoundError(`No room with id ${req.params.id}`);
    res.status(200).json({ msg: "Room deleted successfully" });

}


// get rooms created by host
exports.getRoomsByHost = async (req, res) => {
    console.log(req.params.id);
    const rooms = await Room.find({ host: req.params.id }).sort("-createddAt");
    res.status(200).json({ rooms });
}
