const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/categories"); 
const multer = require("multer");
dotenv.config();
app.use(express.json()); //有這行才能顯示 json 資料

mongoose.connect(process.env.MONGO_URL, {
    // Mongoose 6.0 拿掉 useNewUrlParser & useCreateIndex
    useUnifiedTopology: true
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, "images");
    },
    filename:(req,file,cb) => {
        cb(null, "1.JPG");
    }
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"),(req,res) => {
    res.status(200).json("File has been uploaded");
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/post",postRoute);
app.use("/api/categories",categoryRoute);
app.listen("5050", () => {
    console.log("Backend is running.");
});
