const mongoose = require('mongoose');
const { Schema } = mongoose;

const expenseModel = mongoose.model('Expense', new Schema({
    name: String,
    value: Number,
    description: String,
}));

const create = async (name, value, description) => {
    try {
        const expense = new expenseModel({ name, value, description })
        await expense.save();
        console.log(expense)
        return expense;
    } catch (error) {
        return false;
    }
}

const getAll = async () => {
    try {
        const data = await expenseModel.find();
        return data;
    } catch (error) {
        return false;
    }
}

const exclude = async (id) => {
    try {
        await expenseModel.deleteOne({_id: id})
        return true;
    } catch (error) {
        return false
    }
}

const update = async (id) => {
    try {
        await expenseModel.updateOne({_id: id})
        return true;
    } catch (error) {
        return false
    }
}

module.exports = {
    create,
    getAll,
    exclude,
    update
}