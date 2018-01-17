const joi = require('joi');
const uuid = require('uuid');

const resourceSchema = joi.object({
  id: joi.string().default(uuid.v4, 'auto-generated ID'),
  resourceType: joi.string().required()
}).required();

module.exports = resourceSchema;
