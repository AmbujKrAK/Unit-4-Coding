const express = require("express");
const mongoose = require('mongoose');
const app = express();

app.use(express.json());


//  Connect ------ 

const connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/books")
}


//  Create Schema -------

const sectionSchema = new mongoose.Schema(
    {
        sectionName: {
            type: String,
            require: true
        }

    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Section = mongoose.model("section", sectionSchema)

//CRUD 

app.get("/sections", async (req, res) => {
    try {
        const sections = await Section.find({}).lean().exec()
        return res.status(200).send({ Sections: sections });
    } catch (error) {
        console.log(err);
        return res.status(500).send("Please Check Your Network!");
    }

});

//Post

app.post("/sections", async (req, res) => {
    try {
        const section = await Section.create(req.body);
        return res.status(201).send(section);
    } catch (error) {
        console.log(err);
        return res.status(500).send({ error: err });
    }

});


const bookSchema = new mongoose.Schema(
    {
        bookName: { type: String, require: true },
        bookBody: { type: String, require: true },
        section_id: { type: mongoose.Schema.Types.ObjectId, ref: "section", required: true },
        author_id : { type: mongoose.Schema.Types.ObjectId, ref: "author", required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Book = mongoose.model("book", bookSchema)

app.get("/books", async (req, res) => {
    try {
        const books = await Book.find({}).lean().exec()
        return res.status(200).send({ Books: books });
    } catch (error) {
        console.log(err);
        return res.status(500).send("Please Check Your Network!");
    }

});

app.post("/books", async (req, res) => {
    try {
        const book = await Book.create(req.body);
        return res.status(201).send(book);
    } catch (error) {
        console.log(err);
        return res.status(500).send({ error: err });
    }

});


const authorSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            require: true
        },
        last_name: {
            type: String,
            require: true
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Author = mongoose.model("author", authorSchema)

app.get("/author", async (req, res) => {
    try {
        const authors = await Author.find({}).lean().exec()
        return res.status(200).send({ Authors: authors });
    } catch (error) {
        console.log(err);
        return res.status(500).send("Please Check Your Network!");
    }

});

app.post("/author", async (req, res) => {
    try {
        const author = await Author.create(req.body);
        return res.status(201).send(author);
    } catch (error) {
        console.log(err);
        return res.status(500).send({ error: err });
    }

});


app.listen(5000, async () => {
    try {
        await connect()
        console.log("Listening to port 5000");
    } catch (error) {
        console.log("Please check spelling");
    }

})