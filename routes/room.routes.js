const express = require("express");
const router = express.Router();

const {
    createRoom,
    getAllRooms,
    getSingleRoom,
    updateRoom,
    deleteRoom,
    getRoomsByHost
} = require("../controllers/room.controller");
const { authenticateUser, authorizeRoomPermission } = require("../middlewares/auth.middleware");
const { validateIdParam, validateRoom } = require("../middlewares/validation.middleware");


router
    .route('/')
    .post(authenticateUser, validateRoom, createRoom)
    .get(getAllRooms)


router
    .route('/:id')
    .get(validateIdParam, getSingleRoom)
    .patch(authenticateUser, validateIdParam, authorizeRoomPermission, validateRoom, updateRoom)
    .delete(authenticateUser, validateIdParam, authorizeRoomPermission, deleteRoom);


router.route('/get-room-host/:id').get(getRoomsByHost);

module.exports = router;