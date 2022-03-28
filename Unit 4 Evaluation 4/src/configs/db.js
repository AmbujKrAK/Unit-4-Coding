const mongoose = require('mongoose');

var username = "Ambuj123";
var pass = "Ambuj123";
let database = "TODOs";


const connect = () => {
    mongoose.connect(`mongodb+srv://${username}:${pass}@cluster0.xn7wc.mongodb.net/${database}?retryWrites=true&w=majority`)
}

module.exports = connect;