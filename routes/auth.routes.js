const express = require("express");
const router = express.Router();

const {
    register,
    login,
    logout
} = require("../controllers/auth.controller");

const {
    validateRegisterInput,
    validateLoginInput
} = require("../middlewares/validation.middleware");

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);




module.exports = router;