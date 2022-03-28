const express = require("express");
const crudController = require('./crud.controller');
const Todo = require('../models/todo.model');
const authenticate = require("../middleware/auth")

const app = express();

app.post("/", crudController.post(Todo));


