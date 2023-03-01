const router = require('express').Router();

//required Model
const User = require('../models/User');
const bcrypt = require('bcrypt');

//REGISTER LOGIC
router.post("/register", async (req, res) => {
    try {
        //using bcrypt to hash password keeping safe in the database
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        //gather required data for new user to be created
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        //Save information sent from req
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }
});

//LOGIN LOGIC
router.post("/login", async (req, res) => {
    try {
        //find account by unique username
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("Wrong Username or Password");
        //compare password input with usernames password to check if it matches
        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong Username or Password");
        //return everything back to the user except password
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router