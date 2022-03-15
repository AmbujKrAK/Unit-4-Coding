const app = require("./index");
const connect = require('./config/db');

app.listen(5000, async() => {
    try {
        await connect();
        console.log("Connection Establised!");
        console.log("Listening to Port 5000!");
    } catch (error) {
        console.log(error.message);
    }
});