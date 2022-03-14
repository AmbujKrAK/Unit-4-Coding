const { exec } = require("child_process");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json())

const connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/bankingSystem");
};

app.listen(5000, async (req, res) => {
    try {
        await connect();
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

//Crud Operations - 

//Get

app.get("/users", async (req,res)=> {
    try {
        const users = await User.find({}).lean().exec()
        return res.status(200).send({users : users})
    } catch (error) {
        console.log(error);
        res.status(500).send({Message: "Something Went Wrong, Please try again later!"})
    }
});

// Post

app.post("/users", async (req,res)=> {
    try {
        const user = await User.create(req.body)
        return res.status(201).send(user)
    } catch (error) {
        console.log(error);
        res.status(500).send({Message: "Something Went Wrong, Please try again later!"})
    }
});


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

// Crud Operations - 

// Get

app.get("/branchs", async (req,res)=> {
    try {
        const branchs = await Branch.find({}).lean().exec()
        return res.status(200).send({branchs : branchs})
    } catch (error) {
        console.log(error);
        res.status(500).send({Message: "Something Went Wrong, Please try again later!"})
    }
});

// Post

app.post("/branchs", async (req,res)=> {
    try {
        const branch = await Branch.create(req.body)
        return res.status(201).send(branch)
    } catch (error) {
        console.log(error);
        res.status(500).send({Message: "Something Went Wrong, Please try again later!"})
    }
});

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

//Crud Operations - 

//Get

app.get("/masters", async (req,res)=> {
    try {
        const masters = await Master.find({}).lean().exec()
        return res.status(200).send({masters : masters})
    } catch (error) {
        console.log(error);
        res.status(500).send({Message: "Something Went Wrong, Please try again later!"})
    }
});

// Post

app.post("/masters", async (req,res)=> {
    try {
        const master = await Master.create(req.body)
        return res.status(201).send(master)
    } catch (error) {
        console.log(error);
        res.status(500).send({Message: "Something Went Wrong, Please try again later!"})
    }
});

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

//Crud Operations - 

//Get

app.get("/savings", async (req,res)=> {
    try {
        const savings = await Saving.find({}).lean().exec()
        return res.status(200).send({savings : savings})
    } catch (error) {
        console.log(error);
        res.status(500).send({Message: "Something Went Wrong, Please try again later!"})
    }
});

// Post

app.post("/savings", async (req,res)=> {
    try {
        const saving = await Saving.create(req.body)
        return res.status(201).send(saving)
    } catch (error) {
        console.log(error);
        res.status(500).send({Message: "Something Went Wrong, Please try again later!"})
    }
});


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

//Crud Operations - 

//Get

app.get("/fixeds", async (req,res)=> {
    try {
        const fixeds = await Fixed.find({}).lean().exec()
        return res.status(200).send({fixeds : fixeds})
    } catch (error) {
        console.log(error);
        res.status(500).send({Message: "Something Went Wrong, Please try again later!"})
    }
});

// Post

app.post("/fixeds", async (req,res)=> {
    try {
        const fixed = await Fixed.create(req.body)
        return res.status(201).send(fixed)
    } catch (error) {
        console.log(error);
        res.status(500).send({Message: "Something Went Wrong, Please try again later!"})
    }
});