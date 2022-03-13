
const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
    {
        date_of_evaluation: { type: Number, required: true },
        instructor_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        batch_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "batch",
            required: true
        },
        student_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"student",
            required: true,
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);


const Evaluation = mongoose.model("evaluation", evaluationSchema);

module.export = Evaluation;