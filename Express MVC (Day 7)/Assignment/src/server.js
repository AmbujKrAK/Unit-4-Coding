const connect = require('./config/db.js');
const app = require('./index');


app.listen(5000, async () => {
    try {
        await connect();
        console.log("Connection Established")
        console.log("Listening to port 5000");
    } catch (error) {
        console.log(error);
    }
});