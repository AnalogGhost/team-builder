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
    name: Joi.string().required()
  })
};

module.exports.patch = {
  body: Joi.object({
    name: Joi.string().required()
  }),
  params: Joi.object({
    id: Joi.number().integer().required()
  })
};
