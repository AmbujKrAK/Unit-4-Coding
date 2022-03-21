const mongoose = require('mongoose');

const boookSchema = new mongoose.Schema({

    likes: { type: Number, required: true },
    coverImage: { type: String, required: true },
    content: { type: String, required: true },
    timestamps: true,
    versionKey:false,
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
        unique : true,
    },
    publicationId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "publication",
        required : true,
    },
    commentId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "comment",
        required : true,
    },
});

const Books = mongoose.model("book",boookSchema)

module.exports = Books;