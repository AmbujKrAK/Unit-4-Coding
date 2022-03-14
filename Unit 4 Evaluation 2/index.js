const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json())

const connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/bankingSystem");
};

app.listen(5000, async (req, res) => {
    try {
        console.log("Connection Established");
        console.log("Listening to port 5000");
    } catch (error) {
        console.log("Please check Network!")
    }
});

// ------------------------------------ User Schema ---------------------------------//

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, require: true },
        lastName: { type: String, require: true },
        age : { type: Number, require: true },
        email : { type: String, require: true },
        address : { type: String, require: true },
        savingAcctId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "saving",
            require : true,
        },
        FixedAcctId :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "fixed",
            require : true,
        },

    },
    {
        versionKey : false,
        timestamps : true,
    }
);

const User = mongoose.model("user",userSchema);



// ------------------------------------ Branch Schema ---------------------------------//

const branchSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        address: { type: String, require: true },
        IFSC : { type: String, require: true },
        MICR : { type: String, require: true },

    },
    {
        versionKey : false,
        timestamps : true,
    }
);

const Branch = mongoose.model("branch",branchSchema);

// ------------------------------------ Master Account Schema ---------------------------------//
const masterSchema = new mongoose.Schema(
    {
        balance: { type: Number, require: true },
        userId :  {
            type : mongoose.Schema.Types.ObjectId,
            ref : "user",
            require : true,
        },
        branchId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "branch",
            require : true,
        },
    },
    {
        versionKey : false,
        timestamps : true,
    }
);

const Master = mongoose.model("master",masterSchema);

// ------------------------------------ Saving Account Schema ---------------------------------//

const savingSchema = new mongoose.Schema(
    {
        account_number : { type: Number, require: true, unique : true },
        balance  : { type: Number, require: true },
        interestRate : { type: Number, require: true },
        branchId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "branch",
            require : true,
        },
    },
    {
        versionKey : false,
        timestamps : true,
    }
);

const Saving = mongoose.model("saving",savingSchema);


// ------------------------------------ Fixed Account Schema ---------------------------------//

const fixedSchema = new mongoose.Schema(
    {
        account_number : { type: Number, require: true, unique : true },
        balance  : { type: Number, require: true },
        interestRate : { type: Number, require: true },
        startDate : { type : String, require : true },
        maturityDate : { type : String, require : true },
        branchId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "branch",
            require : true,
        },
    },
    {
        versionKey : false,
        timestamps : true,
    }
);

const Fixed = mongoose.model("fixed",fixedSchema);

