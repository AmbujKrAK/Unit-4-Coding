

const express = require("express");
const Student = require("../models/student.model.js");
const crudController = require("./crud.controller.js");
const app = express();

// -------------------------------------- Student Schema ------------------------------------ //



app.get("", async (req, res) => {
    try {
        const student = await Student.find({})
        .populate('userId')
        .lean().exec()
        return res.status(200).send({ students: student });
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: error});
    }
});

app.post("/",crudController.post(Student));

// app.post("/students", async (req, res) => {
//     try {
//         const student = await Student.create(req.body);
//         return res.status(201).send(student);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send({ error: error });
//     }
// });

module.exports = app;