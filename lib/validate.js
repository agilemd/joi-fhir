const boom = require('boom');
const debug = require('debug')('joi-fhir');
const joi = require('joi');

const schema = require('./schemas');

function validate(input, { resourceType } = {}) {
  debug('validate input', { input, resourceType });

  if (resourceType && input.resourceType !== resourceType) {
    return Promise.reject(boom.badData(
      'FHIR resource failed validation',
      { errors: 'resource type did not match specified resource type' }
    ));
  }

  return joi.validate(input, schema, {
    abortEarly: false
  })
  .then((out) => {
    debug('resource passed validation', out);

    return out;
  })
  .catch((err) => {
    debug('resouce failed validation');

    return Promise.reject(boom.badData(
      'FHIR resource failed validation',
      { errors: err.details }
    ));
  });
}

module.exports = validate;
