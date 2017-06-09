'use strict';

const Joi = require('joi');

const options = {
    allowUnknownBody: false,
    allowUnknownHeaders: false,
    allowUnknownQuery: false,
    allowUnknownParams: false,
    allowUnknownCookies: false
  };

module.exports.delete = {
  options,
  params: {
    id: Joi.number().integer().required()
  }
};

module.exports.get = {
  options,
  params: {
    id: Joi.number().integer()
  }
};

module.exports.post = {
  options,
  body: {
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string(),
    is_active: Joi.boolean()
  }
};

module.exports.patch = {
  options,
  body: {
    first_name: Joi.string(),
    last_name: Joi.string(),
    email: Joi.string(),
    is_active: Joi.boolean()
  },
  params: {
    id: Joi.number().integer().required()
  }
};
