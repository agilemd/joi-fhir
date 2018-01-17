joi-fhir -- Work in progress
==========

Node.js utility for validating FHIR resources.


## Quick start

### Prerequisites

- [Node.js 6+](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/)
- Publish permission to `joi-fhir` on NPM **(Only for deployment)**

### Installing

```sh
npm install --save joi-fhir
```

### Examples

```js
const validateFhir = require('joi-fhir');
const Encounter = {
  resourceType: 'Encounter',
  id: 'ENC001',
  ...
}

// Validate any generic FHIR resource
validateFhir(Encounter)
.then((validated) => console.log('Validated encounter', validated))
.catch((error) => console.log('Error validating encounter', error));

// Ensure FHIR resource matches a certain type
validateFhir(Encounter, { resourceType: 'Encounter' })
.then((validated) => console.log('Validated encounter', validated))
.catch((error) => console.log('Error validating encounter', error));
```


## API

This module exports a single `Function` that accepts a FHIR resource and an `options` object. The function validates the FHIR resource matches the spec and returns a promise with either the validated/formatted FHIR resource or an error detailing the malformed data.

### Definition

```js
validateFhir(resource);
```

### Parameters

| Parameter | Type | Description |
| :-------- | :--- | :---------- |
| `resource` | `Object` | A FHIR resource |


**options**

| Parameter      | Type     | Description | Default |
| :--------      | :------- | :---------- |
| `resourceType` | `String` | If provided, ensure the resource is of this type. Otherwise, allow any FHIR resource | *none* |


## Examples

### Input

#### `encounterA`

Data about an encounter.

```json
{
  "resourceType": "Encounter",
  "status": "in-progress",
  "subject": {
    "reference": "Patient/P01"
  },
  "reason": [
    {
      "text": "Laceration to leg"
    }
  ]
}
```

### Invocation

```js
const validateFhir = require('@agilemd/joi-fhir');

return validateFhir(encounter)
.then((validated) => {
  ...
})
.catch((err) => {
  // Handle error
})
```

### Output

#### `validated/formatted Encounter`

```json
{
  "id": "31a49ff9-2d10-481c-8720-a1a3e61fa981",
  "resourceType": "Encounter",
  "status": "in-progress",
  "subject": {
    "reference": "Patient/P01"
  },
  "reason": [
    {
      "text": "Laceration to leg"
    }
  ]
}
```


## Development

### Install

Clone the source repository, `cd` into the `joi-fhir` directory, and install dependencies:

```sh
git clone git@github.com:agilemd/joi-fhir.git
cd joi-fhir
npm install
```

### Tests

To run the unit tests:

```sh
npm test
```

Changes must not reduce coverage of statements, branches, and functions. To determine unit test coverage:

```sh
npm run coverage
```

### Debug

The [debug](https://www.npmjs.com/package/debug) module is used for runtime logging. Omit the `DEBUG` environment variable to squelch all logging. Set `DEBUG` to the desired level (e.g. `DEBUG=@agilemd/joi-fhir:SUBMODULE`) to restrict logging to a desired service. Or, use `DEBUG=*` to get all debug output from everywhere, including dependencies.

```sh
DEBUG=@agilemd/joi-fhir* npm test
```

### Workflow

1. Feature development and bug fixing *MUST* occur on a non-master branch.
2. All changes *SHOULD* be submitted to master via a [Pull Request](https://github.com/agilemd/joi-fhir/compare).
3. Pull Requests *SHOULD* be merged via a merge commit. Local "in-process" commits may be squashed prior to pushing to the remote feature branch.

To enable a git hook that runs `npm test` prior to pushing, `cd` into the project repo and run:

```sh
touch .git/hooks/pre-push
chmod +x .git/hooks/pre-push
echo "npm test" > .git/hooks/pre-push
```

### Build

This project follows [semantic versioning](http://semver.org/). After committing the latest code to GitHub master, update the version:

```sh
npm version [major/minor/patch]
```

Then push the tag to GitHub and publish this package to [npm](https://www.npmjs.com/):

```sh
git push origin --tags
npm publish
```

### References

- https://www.hl7.org/fhir/resourcelist.html

### Implementation checklist

This project is a work in progress. Any [defined FHIR resource](https://www.hl7.org/fhir/resourcelist.html) will pass validation; however, only certain resources are fully validated. The table below describes which resources have complete validation and which are in progress

Support legend
| Icon               | Description |
| :----------------- | :---------- |
| :white_check_mark: | Completely implemented |
| :o:                | Partially implemented  |
| :no_entry_sign:    | Not yet implemented    |

| Resource Type | Support |
| :------------ | :------ |
