const express = require('express');
const app = express();
const userController = require('./controllers/users.controller');
const transporter = require('./configs/mail')
app.registrationController = require('./controllers/register.controller')


app.use("/users",userController);
app.use("/registrations",registrationController);

module.exports = app;