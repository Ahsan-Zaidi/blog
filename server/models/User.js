const mongoose = require('mongoose');

//User Blueprint: includes username, email, password, pp, and timestamps
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            default: "",
        },
    }, {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);