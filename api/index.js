const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
//app.use(express.json()); //有這行才能顯示 json 資料

mongoose.connect(process.env.MONGO_URL, {
    // Mongoose 6.0 拿掉 useNewUrlParser & useCreateIndex
    useUnifiedTopology: true
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen("5050", () => {
    console.log("Backend is running.");
});
