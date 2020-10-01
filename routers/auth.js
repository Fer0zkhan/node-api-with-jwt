const express = require('express');
const auth = express();
const User = require('../model/User');

//Validation
const Joi = require('@hapi/joi');

const schema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
}

auth.post('/register', async(req, res) => {
    //Validation before DataBase

    res.send(Joi.valid(req.body, schema));


    // const newUser = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // });
    // try {
    //     const savedUser = await newUser.save(() => console.log("User Saved"));
    //     res.send(savedUser);
    // } catch (err) {
    //     res.send(err);
    // }
});


module.exports = auth;