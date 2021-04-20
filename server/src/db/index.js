const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb://127.0.0.1/database', {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', () => console.log('Database connection error'));
    db.once('open', () => {
        console.log("Connected to the database!")
    })
};

module.exports = {
    connect
}