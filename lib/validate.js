const joi = require('joi');

const schema = require('./schemas');

module.exports = input => joi.validate(input, schema);
