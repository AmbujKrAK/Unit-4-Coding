const app = require("./index");
const connect = require("../configs/db");
const path = require("path");
app.listen(5000, async() => {
    try {
        await connect();
    console.log("listening on port 5000 for Express File Uploads");
    } catch (error) {
        console.log(error)
    }
    
});