const joi = require('joi');
const uuid = require('uuid/v4');

const constants = require('../constants');

const RESOURCE_TYPES = constants.RESOURCE_TYPES_ARRAY;

const resourceSchema = joi.object({
  id: joi.string().default(() => uuid(), 'auto-generated ID'),
  resourceType: joi.string().valid(RESOURCE_TYPES).required()
}).unknown().required();

module.exports = resourceSchema;
