const express = require("express");
const crudController = require('./crud.controller');
const User = require('../models/user.model');
const app = express();
const authenticate = require("../middleware/auth")

app.post("/", crudController.post(User));