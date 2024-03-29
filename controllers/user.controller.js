const { NotFoundError } = require("../errors/cutom.error");
const User = require("../models/user.model");

exports.getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });
    const userWithoutPassword = user.toJSON();
    res.status(200).json({ user: userWithoutPassword });
}

exports.updateUser = async (req, res) => {
    const newUser = { ...req.body };
    delete newUser.password;

    newUser.avatar = req.file?.path;

    const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

    res.status(200).json({ msg: "User updated successfully" });
}


exports.getSingleUser = async (req, res) => {
    const user = await User.findOne({ _id : req.params.id});
    if(!user) throw new NotFoundError(`No user with id ${req.params.id}`);
    res.status(200).json({ user: user});
}