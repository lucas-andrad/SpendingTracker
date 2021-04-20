const services = require('../../services/expenses');

const get = async (req, res) => {
    try {
        const data = await services.getExpenses();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("We found an error")
    }
}

const create = async (req, res) => {
    const { name, value, description } = req.body;
    try {
        const data = await services.createExpense(name, value, description);
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send("We found an error")
    }
}

const edit = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await services.editExpense(id);
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send("We found an error")
    }
}

const exclude = async (req, res) => {
    const { id } = await req.body;
    try {
        services.deleteExpense(id);
        res.status(201).send([]);
    } catch (error) {
        res.status(500).send("We found an error")
    }
}

module.exports = {
    create,
    edit,
    exclude,
    get
}