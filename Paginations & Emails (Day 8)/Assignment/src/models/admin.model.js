const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, reqired: true },
        email: { type: String, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Admin = mongoose.model("admin",adminSchema );

module.exports = Admin;