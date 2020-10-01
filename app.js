const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

//Import Routers
const userRegistration = require('./routers/auth');

//MiddleWare
app.use(express.json());

//Routers MiddleWare
app.use('/user', userRegistration);

//Server Connectivity
app.listen(process.env.PORT || 3000, () => console.log("Server Running"));

//DataBase Connectivity
mongoose.connect(process.env.DATABASE_PATH, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DataBase Connected');
});