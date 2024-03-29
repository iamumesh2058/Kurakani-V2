const { UnauthenticatedError, UnauthorizedError } = require("../errors/cutom.error");
const { verifyJWT } = require("../utils/token.utils");
const Room = require("../models/room.model");
const Message = require("../models/message.model");


exports.authenticateUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) throw new UnauthenticatedError("Authentication invalid");
    try {
        const { userId } = verifyJWT(token);
        req.user = { userId };
        next();
    }
    catch (error) {
        if (!token) throw new UnauthenticatedError("Authentication invalid");
    }
}

exports.authorizeRoomPermission = async (req, res, next) => {
    const room = await Room.findById(req.params.id);
    const { host } = room;
    if (host.toString() !== req.user.userId) {
        throw new UnauthorizedError('Unauthorized to perform this action');
    }
    next();
}

exports.authorizeMessagePermission = async (req, res, next) => {
    const message = await Message.findById(req.params.id);
    const { user } = message;
    if(user.toString() !== req.user.userId) {
        throw new UnauthorizedError('You are not allowed to delete this');
    }
    next();
}