const express = require('express');
// const { body, validationResult } = require('express-validator');
const router = express.Router();

const User = require("../models/user.model");

router.post("/",

body("first_name").not().isEmpty(),
body("last_name").not().isEmpty(),
body("email").not().isEmpty().isEmail(),
body("pincode").isNumeric().isLength(6),
body("age").not().isEmpty(),
body("gender").not().isEmpty(),


);


module.exports = router;