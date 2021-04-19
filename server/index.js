const express = require('express');
const expenses = require('./routes/expenses');

const app = express();

app.use(express.json());
app.use('/expense', expenses);

app.listen(3000, (req, res) => {
    console.log("App listening on 3000 port")
})