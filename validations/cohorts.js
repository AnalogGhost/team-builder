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
    name: Joi.string().required()
  }
};

module.exports.patch = {
  options,
  body: {
    name: Joi.string().required()
  },
  params: {
    id: Joi.number().integer().required()
  }
};
