const joi = require('joi');

const constants = require('../constants');

const RESOURCE_TYPES = constants.RESOURCE_TYPES_ARRAY;

const resourceSchema = joi.object({
  id: joi.string(),
  resourceType: joi.string().valid(RESOURCE_TYPES).required()
}).unknown().required();

module.exports = resourceSchema;
