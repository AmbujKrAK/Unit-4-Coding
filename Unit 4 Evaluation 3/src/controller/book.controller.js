const express = require('express')
const Books = require('../model/book.model')
const router = express.Router();

router.post("", async(req,res)=>{
    try {
        const book = await Books.create(req.body); 
    } catch (error) {
        console.log({error:error})
    }
});
module.exports = router;