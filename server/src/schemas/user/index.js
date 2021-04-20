const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(6),
})

module.exports = schema;