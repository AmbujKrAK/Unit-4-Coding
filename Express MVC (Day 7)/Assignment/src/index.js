const express = require("express");

const usersController =require("./controllers/users.controller.js")
const studentsController =require("./controllers/students.controller.js")
const batchsController =require("./controllers/batchs.controller.js")
const submissionsController =require("./controllers/submission.controller.js")
const evaluationsController =require("./controllers/evaluation.controller.js");


const app = express();
app.use(express.json());

app.use("/users",usersController)
app.use("/students",studentsController)
app.use("/batchs",batchsController)
app.use("/submissions",submissionsController)
app.use("/evaluations",evaluationsController)

module.exports = app;

// ---------------------------------- Search Method ----------------------------------- //

// fetch all students who gave a particular evaluation

// app.get("/evaluations/students/" , async () =>{
//     try {
//         const students = await Evaluation.find({evaluation_id: req.params.evaluationId}).lean().exec();
//         return res.status(200).send(students)
//     } catch (error) {
//         return res.status(500).send({ error: error });
//     }
// })

// // fetch the student with his personal details who scored the highest marks in the evaluation

// app.get("/students/:")