
const express = require("express");
const Batch = require("../models/batch.model.js")
const app = express();


// const router  = express.Router(); but then you have to change it everywhere

const crudController = require("./crud.controller.js");


// -------------------------------------- Batch Schema ------------------------------------ //



app.get("", async (req, res) => {
    try {
        const batch = await Batch.find({}).lean().exec()
        return res.status(200).send({ batchs: batch });
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: error});
    }
});

app.post("/",crudController.post(Batch));

// app.post("/batchs", async (req, res) => {
//     try {
//         const batch = await Batch.create(req.body);
//         return res.status(201).send(batch);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send({ error: error });
//     }
// });

module.exports = app;