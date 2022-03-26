
const express = require("express");
const Evaluation = require("../models/evaluation.model.js")
const app = express();
const crudController = require("./crud.controller.js");
// -------------------------------------- Evaluation Schema ------------------------------------ //




app.get("", async (req, res) => {
    try {
        const evaluation = await Evaluation.find({})
        .populate('instructor_id').populate('batch_id')
        .lean().exec()
        return res.status(200).send({ evaluations: evaluation });
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: error});
    }
});

app.post("/",crudController.post(Evaluation));

// app.post("/evaluations", async (req, res) => {
//     try {
//         const evaluation = await Evaluation.create(req.body);
//         return res.status(201).send(evaluation);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send({ error: error });
//     }
// });


module.exports = app;