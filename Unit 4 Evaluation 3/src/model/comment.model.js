const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    body: { type: String, required: true },
    timestamps: true,
    versionKey:false,
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
    },
});

const Comment = mongoose.model("comment",commentSchema)

module.exports = Comment;