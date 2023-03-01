const mongoose = require('mongoose');

//Blueprint for Post, includes title, description, photo, username, and category
const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false,
        },
        username: {
            type: String,
            required: true,
        },
        catergories: {
            type: Array,
            required: false,
        }
    }, { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);