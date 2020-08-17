const Joi = require('joi');

module.exports = Joi.object({
    id: Joi.string().required(),
    author: Joi.array().items(Joi.string()).required(),
    formaturi: Joi.array().items(Joi.string()).required(),
    language: Joi.array().items(Joi.string()).required(),
    rights: Joi.array().items(Joi.string()).required(),
    subject: Joi.array().items(Joi.string()).required(),
    title: Joi.array().items(Joi.string()).required(),
}).required();
