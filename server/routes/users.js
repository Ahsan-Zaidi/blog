const router = require('express').Router();

//required Model
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//UPDATE
router.put("/:id", async (req, res) => {
    //if req.body and req.params equal same userId carry on; otherwise its the wrong account
    if (req.body.userId === req.params.id) {
        //hashing password once again for user security
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {new: true});
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json("You can only update your account!");
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
    //checks if userId from the body matches id in params if so continue if not its the wrong user
    if (req.body.userId === req.params.id) {
        //checking if the user exists at all in the database
        try {
            const user = await User.findById(req.params.id);
            //once both conditions are passed it will go on to delete user and all their posts
            try {
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } catch (err) {
            res.status(404).json("User is not found!");
        }
    } else {
        res.status(401).json("You can only delete your account!");
    }
});

//GET USER
router.get("/:id", async (req, res) => {
    try {
        //find User by matching Id once found exclude password and display user data
        const user = await User.findById(req.params.id);
        const { password , ...others } = user._doc
        res.status(200).json(others);
    } catch (err) { 
        res.status(500).json(err);
    }
});

module.exports = router