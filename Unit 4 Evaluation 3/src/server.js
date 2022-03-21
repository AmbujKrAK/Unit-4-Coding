const express = require('express')
const connect = require('./config/db')
const app = express();
app.use(express.json());



const userController = require("./controller/user.controller")

const bookController = require("./controller/book.controller")

const commentController = require("./controller/comment.controller")

const publicationController = require("./controller/publication.controller")


app.use("/user",userController)
app.use("/books",bookController)
app.use("/comments",commentController)
app.use("/publications",publicationController)


app.listen(5000, async(req,res)=>{
    try {
        await connect()
        console.log("Connection Established!")
        console.log("Listening to Port 5000");
    } catch (error) {
        console.log(error)
    }
});