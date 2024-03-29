const Topic = require("../models/topic.model");

// create topic
exports.createTopic = async (req, res) => {
    const newTopic = await Topic.create(req.body);
    res.status(201).json({ msg: "Topic created", topic: newTopic});
}


// get all topics
exports.getAllTopics = async (req, res) => {
    const topics = await Topic.find();
    res.status(200).json({ topics: topics });
}