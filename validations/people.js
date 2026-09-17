'use strict';

const { Joi } = require('express-validation');

module.exports.delete = {
  params: Joi.object({
    id: Joi.number().integer().required()
  })
};

module.exports.get = {
  params: Joi.object({
    id: Joi.number().integer()
  })
};

module.exports.post = {
  body: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string(),
    is_active: Joi.boolean()
  })
};

module.exports.patch = {
  body: Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    email: Joi.string(),
    is_active: Joi.boolean()
  }),
  params: Joi.object({
    id: Joi.number().integer().required()
  })
};
