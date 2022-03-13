
const express = require("express");
const User = require("../models/user.model.js")
const app = express();

const crudController = require("./crud.controller.js");

// -------------------------------------- User Schema ------------------------------------ //


app.get("/users", async (req, res) => {
    try {
        const user = await User.find({}).lean().exec()
        return res.status(200).send({ users: user });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Please Check Your Network!");
    }
});

app.post("",crudController.post(User));

// app.post("/users", async (req, res) => {
//     try {
//         const user = await User.create(req.body);
//         return res.status(201).send(user);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send({ error: error });
//     }
// });

// ------------------------------ Update Id --------------------------------//

app.patch("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body, {new: true});
        return res.status(201).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error });
    }
});


// ------------------------ Delete Id------------------------------//

// app.delete("/users/:id", async (req,res)=> {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id).lean().exec()
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send({ error: error });
//     }
// })

app.delete(":/id",crudController.deleteOne(User))

module.exports = app;