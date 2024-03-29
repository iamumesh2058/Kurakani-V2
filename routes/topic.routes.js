const express = require("express");
const router = express.Router();

const {
    createTopic, getAllTopics
} = require("../controllers/topic.controller");
const { validateTopic } = require("../middlewares/validation.middleware");
const { authenticateUser } = require("../middlewares/auth.middleware");


router.post("/create-topic", authenticateUser, validateTopic, createTopic);
router.get("/get-all-topics", getAllTopics);


module.exports = router;