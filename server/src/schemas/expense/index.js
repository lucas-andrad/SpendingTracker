const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().exist().required(),
    value: Joi.number().required(),
    description: Joi.string(),
})

module.exports = schema;