const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');

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

//register-login route
app.use("/server/auth", authRoute);
//users update-delete route
app.use("/server/users", userRoute);
//post CRUD routes
app.use("/server/posts", postRoute);
//catgory get route
app.use("/server/categories", categoryRoute);

//connect/starting of the server
app.listen('5000', () => {
    console.log("backend is running");
})