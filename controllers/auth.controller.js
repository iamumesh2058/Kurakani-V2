const User = require("../models/user.model");
const { hashedPassword, comparePassword } = require("../utils/password.utils");
const { UnauthenticatedError } = require("../errors/cutom.error");
const { createJWT } = require("../utils/token.utils");

// reigster
exports.register = async (req, res) => {
    const hashedPasswords = await hashedPassword(req.body.password);
    req.body.password = hashedPasswords
    const user = await User.create(req.body);
    res.status(201).json({ msg: "User created", user: user });
}


// login
exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    const isValidUser = user && (await comparePassword(req.body.password, user.password));
    if (!isValidUser) throw new UnauthenticatedError("Invalid creadentials");

    const token = createJWT({ userId: user._id });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
    });

    res.status(200).json({ msg: "User logged in" })
}


// logout
exports.logout = (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.status(200).json({ msg: "User logged out!"});
}