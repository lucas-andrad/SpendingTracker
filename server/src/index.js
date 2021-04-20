const express = require('express');
const routes = require('./routes');
const db = require('./db');

const app = express();

app.use(express.json());
app.use('/expense', routes.expenses);

app.listen(3000, (req, res) => {
    console.log("App listening on 3000 port")
    db.connect();
})

