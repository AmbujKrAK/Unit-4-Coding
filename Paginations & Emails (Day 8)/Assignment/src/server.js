const app = require('./index');
const connect = require('./configs/db');

app.listen(5050, async () => {
    try {
        await connect();
        console.log("Connection Established");
        console.log("Listening to port 5000");
    } catch (error) {
        console.log({ Error: error })
    }
});