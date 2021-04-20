const models = require('../../models/expenses');

const getExpenses = async () => {
    const data = await models.getAll();
    return data;
};

const createExpense = async (name, value, description) => {
    return await models.create(name, value, description);
}

const editExpense = async (id) => {
    return await models.update(id);
}

const deleteExpense = async (id) => {
    return await models.exclude(id);
}

module.exports = {
    getExpenses,
    createExpense,
    editExpense,
    deleteExpense,
};