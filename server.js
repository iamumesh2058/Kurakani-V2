require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

// routes
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const topicRoutes = require("./routes/topic.routes");
const roomRoutes = require("./routes/room.routes");
const messageRoutes = require("./routes/message.routes");


// middlewares
const errorHandlerMiddleware = require("./middlewares/error.handler.middleware");
const { authenticateUser } = require("./middlewares/auth.middleware");

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use('/public/uploads', express.static('public/uploads'));
app.use(cookieParser());
app.use(express.json());


// using routes
app.use("/api/auth", authRoutes);
app.use("/api/user", authenticateUser, userRoutes);
app.use("/api/topic", topicRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/message", messageRoutes);


app.use("*", (req, res) => {
    res.status(404).json({ msg: "not found" });
});


app.use(errorHandlerMiddleware);

// database connection
const port = process.env.PORT || 7100;
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Database connected successfully");
        app.listen(port, () => {
            console.log("App started at ", port);
        });
    })
    .catch((error) => {
        console.log("Error during database connection");
    })