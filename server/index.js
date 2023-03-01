const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

//configure enviornment file
dotenv.config();

//allow use to use json 
app.use(express.json());

//connecting to MongoDB 
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

//register route
app.use("/server/auth", authRoute);

//connect/starting of the server
app.listen('5000', () => {
    console.log("backend is running");
})