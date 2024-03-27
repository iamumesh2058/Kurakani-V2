const { body, param, validationResult } = require("express-validator");
const { BadRequestError, NotFoundError, UnauthorizedError } = require("../errors/cutom.error");
const User = require('../models/user.model');
const mongoose = require("mongoose");


const withValidationError = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                throw new BadRequestError(errorMessages[0]);
            }
            next();
        },
    ];
};


// exports.validateIdParam = withValidationError([
//     param('id').custom(async (value, { req }) => {
//         const isValidId = mongoose.Types.ObjectId.isValid(value);
//         if (!isValidId) throw new Error('Invalid MongoDB id');

//         const job = await Job.findById(value);
//         if (!job) throw new NotFoundError(`No job with id ${value}`);

//         const isAdmin = req.user.role === 'admin';
//         const isOwner = req.user.userId === job.createdBy.toString()
//         if (!isAdmin && !isOwner) throw new UnauthorizedError('Not authorized to access this route');
//     }),
// ]);


exports.validateRegisterInput = withValidationError([
    body('username')
        .notEmpty()
        .withMessage('Username is required')
        .isLength({ min: 3 })
        .withMessage('Username must be at least 3 characters')
        .custom(async (username) => {
            const user = await User.findOne({ username });
            if (user) {
                throw new BadRequestError("Username not available");
            }
        }),

    body('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage("Invalid email format").
        custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) {
                throw new BadRequestError('Email already exists');
            }
        }),

    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .matches(/[a-z]/).withMessage('Password must consist of at least 1 lowercase alphabet')
        .matches(/[A-Z]/).withMessage('Password must consist of at least 1 uppercase alphabet')
        .matches(/[0-9]/).withMessage('Password must consist of at least 1 number')
        .matches(/[+\-*&^%$#@]/).withMessage('Password must consist of at least 1 special character')
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
]);


exports.validateLoginInput = withValidationError([
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail().withMessage("Invalid email format")
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new BadRequestError('User does not exist');
            }
        }),
    body('password')
        .notEmpty()
        .withMessage('password is required')
])


// exports.validateUpdateUser = withValidationError([
//     body('firstName').notEmpty().withMessage('name is required'),
//     body('email')
//         .notEmpty()
//         .withMessage('email is required')
//         .isEmail()
//         .withMessage("Invalid email format").
//         custom(async (email, { req }) => {
//             const user = await User.findOne({ email });
//             if (user && user._id.toString() !== req.user.userId) {
//                 throw new BadRequestError('email already exists');
//             }
//         }),
//     body('location').notEmpty().withMessage('location is required'),
//     body('lastName').notEmpty().withMessage('last name is required')
// ]);