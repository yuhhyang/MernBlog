const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
    // Mongoose 6.0 拿掉 useNewUrlParser & useCreateIndex
    useUnifiedTopology: true
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));


app.listen("5050", () => {
    console.log("Backend is running.");
});
