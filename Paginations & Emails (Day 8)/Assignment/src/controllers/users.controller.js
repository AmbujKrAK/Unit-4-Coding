const express = require('express');
const User = require('../models/users.model');
const app = express();

app.get("/", async(req,res)=>{
    try {
        const users = await User.find({}).lean().exec();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send(error);
    }
});

app.get("/registeredUsers", async (req,res)=>{
    try {
        const user = await User.find({registered: "Yes"}).lean().exec();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send(error);
    }
});

module.exports = app;