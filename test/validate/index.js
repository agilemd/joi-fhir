/* global describe, it, beforeEach */
/* eslint-disable global-require, strict */
const { expect } = require('chai');
const uuid = require('uuid');

const validate = require('../../index');
const clone = require('../../lib/utils/clone');

const { RESOURCE_TYPES } = validate;

const sampleWithId = require('../fixtures/conditions/01_with_id.json');
const sampleWithoutId = require('../fixtures/conditions/02_without_id.json');

describe('validate/GenericeResource', () => {
  describe('valid resources', () => {
    it('changes nothing', () =>
      validate(sampleWithId)
      .then((out) => {
        expect(out).to.deep.equal(sampleWithId);
      })
    );

    it('does not add id', () =>
      validate(sampleWithoutId)
      .then((out) => {
        expect(sampleWithoutId.id).to.equal(undefined);
        expect(out.id).to.equal(undefined);
      })
    );
  });

  describe('valid resources with required resourceType', () => {
    let sample;

    beforeEach(() => {
      sample = clone(sampleWithId);
    });

    it('with Condition resourceType', () =>
      validate(sample, { resourceType: RESOURCE_TYPES.CONDITION })
      .then((out) => {
        expect(out).to.deep.equal(sample);
      })
    );

    it('with other resourceType', () =>
      validate(sample, { resourceType: RESOURCE_TYPES.ENCOUNTER })
      .then(() => { throw new Error('should have thrown'); })
      .catch((err) => {
        expect(err.isBoom).to.equal(true);
        expect(err.output.statusCode).to.equal(422);
      })
    );
  });

  describe('invalid resources', () => {
    let sample;

    beforeEach(() => {
      sample = clone(sampleWithId);
    });

    it('has non-string id', () => {
      sample.id = {};

      return validate(sample)
      .then(() => { throw new Error('should have thrown'); })
      .catch((err) => {
        expect(err.isBoom).to.equal(true);
        expect(err.output.statusCode).to.equal(422);
      });
    });

    it('has no resourceType', () => {
      delete sample.resourceType;

      return validate(sample)
      .then(() => { throw new Error('should have thrown'); })
      .catch((err) => {
        expect(err.isBoom).to.equal(true);
        expect(err.output.statusCode).to.equal(422);
      });
    });

    it('has invalid resourceType', () => {
      sample.resourceType = uuid.v4();

      return validate(sample)
      .then(() => { throw new Error('should have thrown'); })
      .catch((err) => {
        expect(err.isBoom).to.equal(true);
        expect(err.output.statusCode).to.equal(422);
      });
    });
  });
});
