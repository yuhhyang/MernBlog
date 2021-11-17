const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// Register
router.post("/register", async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
})

// Login
router.post("/login", async (req, res) => {
    try{
        // 查無使用者
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("Wrong credentials");
        // 密碼不符
        const validate = await bcrypt.compare(req.body.password, user.password);
        !validate && res.status(400).json("Wrong credentials");
        // 成功登入，不顯示密碼給使用者
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;