const express = require('express');
const route = express.Router();
const expense = require('../../controllers/expenses')
const { verifyData } = require('../../middlewares/expenses')

route.get('/', expense.get);
route.post('/', verifyData, expense.create);
route.put('/:id', expense.edit);
route.delete('/:id', expense.exclude);

module.exports = route;