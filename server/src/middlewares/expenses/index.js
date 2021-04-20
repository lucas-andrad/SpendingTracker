const Joi = require('joi');
const { expense } = require('../../schemas');
const schema = require('../../schemas/expense');

const verifyData = (req, res, next) => {
    console.log("aqui")
    const data = req.body;
    const { error } = schema.validate(data)
    if (error) {
        const { details } = error;
        const { message } = details[0];
        res.status(422).json({
            message
        })
    }

    next();
} 

module.exports = {
    verifyData
}