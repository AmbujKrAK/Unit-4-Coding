const express = require("express");
const crudController = require('./crud.controller');
const Todo = require('../models/todo.model');

const app = express();

app.post("/", crudController.post(Todo));