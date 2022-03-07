const express = require("express");
const { get } = require("http");
const app = express();

app.get("/books", logger("books"), (req, res) => {
    res.send({ route: "Books" })
});

app.get("/libraries", logger("librarian"), (req, res) => {
    res.send({ route: "Libraries", permission: res.permission })
});

app.get("/authors", logger("authors"), (req, res) => {
    res.send({ route: "Authors", permission: res.permission })
});

function logger(role) {
    return function checkPermision(req, res, next){
        if(role == "librarian"){
            console.log("Moving to libraries page");
            res.permission = true;
            return next();
        }else if(role == "authors"){
            console.log("Moving to authors page");
            res.permission = true;
            return next();
        }else{
            // return res.send("You are on Wrong Path");
            next();
        }
    };
}

app.listen(5000, () => {
    console.log("Listening to Port 5000");
});