
const express = require("express");
const Submission = require("../models/submission.model.js")
const app = express();
const crudController = require("./crud.controller.js");
const evaluationModel = require('../models/evaluation.model')

// -------------------------------------- Submission Schema ------------------------------------ //



app.get("", async (req, res) => {
    try {
        const submission = await Submission.find({})
        .populate('evaluation_id')
        .populate('student_id')
        .lean().exec()
        return res.status(200).send({ submissions: submission });
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: error});
    }
});

app.post("/",crudController.post(Submission));

// app.post("/submissions", async (req, res) => {
//     try {
//         const submission = await Submission.create(req.body);
//         return res.status(201).send(submission);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send({ error: error });
//     }
// });

// ------------------- Search Term ---------------//

app.get("/students", async (req, res) => {
    try {
        const students = await Submission.find({},{student_id: 1 }).populate('student_id')
        .lean().exec()
        return res.status(200).send(students);
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: error});
    }
});

app.get("/highscore", async (req,res)=>{
    try {
        const evalRes = await Submission.find({}).populate(student_id).lean().exec();
        let winner = {};
        let high = -Infinity;
        const highest = evalRes.forEach(el =>{
            if(el.marks > high){
                winner = el;
                high = el.marks
            }
        })
        return res.status(200).send(winner)
    } catch (error) {
        return res.status(500).send(error)
    }
})


module.exports = app;