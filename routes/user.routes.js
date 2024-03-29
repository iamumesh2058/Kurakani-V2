const express = require("express");
const router = express.Router();

const {
    getCurrentUser,
    updateUser,
    getSingleUser
} = require('../controllers/user.controller');

const upload = require("../middlewares/multer.middlware");
const { validateUpdateUser, validateIdParam } = require("../middlewares/validation.middleware");

router.get('/current-user', getCurrentUser);
router.get("/:id", validateIdParam, getSingleUser);
router.patch('/update-user', upload.single("avatar"), validateUpdateUser, updateUser);


module.exports = router;