const express = require("express");
const crudController = require('./crud.controller');
const User = require('../models/user.model');
const app = express();

app.post("/", crudController.post(User));