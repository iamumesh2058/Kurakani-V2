const express = require("express");
const router = express.Router();

const {
    createMessage,
    deleteMessage,
    getFiveMessages,
    getMessageByRoom
} = require("../controllers/message.controller");
const { validateMessage } = require("../middlewares/validation.middleware");
const { authenticateUser, authorizeMessagePermission } = require("../middlewares/auth.middleware");


router.post("/create-message", authenticateUser, validateMessage, createMessage);
router.get("/get-five-messages", getFiveMessages);
router.get("/get-message-by-room/:id", getMessageByRoom);
router.delete("/delete-message/:id", authenticateUser, authorizeMessagePermission, deleteMessage);


module.exports = router;