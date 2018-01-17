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
| :--------      | :------- | :---------- | :-----  |
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


| Resource Type                                                           | Support         |
| :---------------------------------------------------------------------- | :-------------- |
| [Account](https://www.hl7.org/fhir/account.html)                        | :no_entry_sign: |
| [ActivityDefinition](https://www.hl7.org/fhir/activitydefinition.html)  | :no_entry_sign: |
| [AllergyIntolerance](https://www.hl7.org/fhir/allergyintolerance.html)  | :no_entry_sign: |
| [AdverseEvent](https://www.hl7.org/fhir/adverseevent.html)              | :no_entry_sign: |
| [Appointment](https://www.hl7.org/fhir/appointment.html)                | :no_entry_sign: |
| [AppointmentResponse](https://www.hl7.org/fhir/appointmentresponse.html)| :no_entry_sign: |
| [AuditEvent](https://www.hl7.org/fhir/auditevent.html)                  | :no_entry_sign: |
| [Basic](https://www.hl7.org/fhir/basic.html)                            | :no_entry_sign: |
| [Binary](https://www.hl7.org/fhir/binary.html)                          | :no_entry_sign: |
| [BodySite](https://www.hl7.org/fhir/bodysite.html)                      | :no_entry_sign: |
| [Bundle](https://www.hl7.org/fhir/bundle.html)                          | :no_entry_sign: |
| [CapabilityStatement](https://www.hl7.org/fhir/capabilitystatement.html)| :no_entry_sign: |
| [CarePlan](https://www.hl7.org/fhir/careplan.html)                      | :no_entry_sign: |
| [CareTeam](https://www.hl7.org/fhir/careteam.html)                      | :no_entry_sign: |
| [ChargeItem](https://www.hl7.org/fhir/chargeitem.html)                  | :no_entry_sign: |
| [Claim](https://www.hl7.org/fhir/claim.html)                            | :no_entry_sign: |
| [ClaimResponse](https://www.hl7.org/fhir/claimresponse.html)            | :no_entry_sign: |
| [ClinicalImpression](https://www.hl7.org/fhir/clinicalimpression.html)  | :no_entry_sign: |
| [CodeSystem](https://www.hl7.org/fhir/codesystem.html)                  | :no_entry_sign: |
| [Communication](https://www.hl7.org/fhir/communication.html)            | :no_entry_sign: |
| [CommunicationRequest](https://www.hl7.org/fhir/communicationrequest.html)| :no_entry_sign: |
| [CompartmentDefinition](https://www.hl7.org/fhir/compartmentdefinition.html)| :no_entry_sign: |
| [Composition](https://www.hl7.org/fhir/composition.html)                | :no_entry_sign: |
| [ConceptMap](https://www.hl7.org/fhir/conceptmap.html)                  | :no_entry_sign: |
| [Condition](https://www.hl7.org/fhir/condition.html)                  | :no_entry_sign: |
| [Consent](https://www.hl7.org/fhir/consent.html)                  | :no_entry_sign: |
| [Contract](https://www.hl7.org/fhir/contract.html)                  | :no_entry_sign: |
| [Coverage](https://www.hl7.org/fhir/converage.html)                  | :no_entry_sign: |
| [DataElement](https://www.hl7.org/fhir/dataelement.html)                  | :no_entry_sign: |
| [DetectedIssue](https://www.hl7.org/fhir/detectedissue.html)                  | :no_entry_sign: |
| [Device](https://www.hl7.org/fhir/device.html)                  | :no_entry_sign: |
| [DeviceComponent](https://www.hl7.org/fhir/devicecomponent.html)                  | :no_entry_sign: |
| [DeviceMetric](https://www.hl7.org/fhir/devicemetric.html)                  | :no_entry_sign: |
| [DeviceRequest](https://www.hl7.org/fhir/devicerequest.html)                  | :no_entry_sign: |
| [DeviceUseStatement](https://www.hl7.org/fhir/deviceusestatement.html)                  | :no_entry_sign: |
| [DiagnosticReport](https://www.hl7.org/fhir/diagnosticreport.html)                  | :no_entry_sign: |
| [DocumentManifest](https://www.hl7.org/fhir/documentmanifest.html)                  | :no_entry_sign: |
| [DocumentReference](https://www.hl7.org/fhir/documentreference.html)                  | :no_entry_sign: |
| [EligibilityRequest](https://www.hl7.org/fhir/eligibilityrequest.html)                  | :no_entry_sign: |
| [EligibilityResponse](https://www.hl7.org/fhir/eligibilityresponse.html)                  | :no_entry_sign: |
| [Encounter](https://www.hl7.org/fhir/encounter.html)                  | :no_entry_sign: |
| [Endpoint](https://www.hl7.org/fhir/endpoint.html)                  | :no_entry_sign: |
| [EnrollmentRequest](https://www.hl7.org/fhir/enrollmentrequest.html)                  | :no_entry_sign: |
| [EnrollmentResponse](https://www.hl7.org/fhir/enrollmentresponse.html)                  | :no_entry_sign: |
| [EpisodeOfCare](https://www.hl7.org/fhir/episodeofcare.html)                  | :no_entry_sign: |
| [ExpansionProfile](https://www.hl7.org/fhir/expansionprofile.html)                  | :no_entry_sign: |
| [ExplanationOfBenefit](https://www.hl7.org/fhir/explanationofbenefit.html)                  | :no_entry_sign: |
| [FamilyMemberHistory](https://www.hl7.org/fhir/familymemberhistory.html)                  | :no_entry_sign: |
| [Flag](https://www.hl7.org/fhir/flag.html)                  | :no_entry_sign: |
| [Goal](https://www.hl7.org/fhir/goal.html)                  | :no_entry_sign: |
| [GraphDefinition](https://www.hl7.org/fhir/graphdefinition.html)                  | :no_entry_sign: |
| [Group](https://www.hl7.org/fhir/group.html)                  | :no_entry_sign: |
| [GuidanceResponse](https://www.hl7.org/fhir/guidanceresponse.html)                  | :no_entry_sign: |
| [HealthcareService](https://www.hl7.org/fhir/healthcareservice.html)                  | :no_entry_sign: |
| [ImagingManifest](https://www.hl7.org/fhir/imagingmanifest.html)                  | :no_entry_sign: |
| [ImagingStudy](https://www.hl7.org/fhir/imagingstudy.html)                  | :no_entry_sign: |
| [Immunization](https://www.hl7.org/fhir/immunization.html)                  | :no_entry_sign: |
| [ImmunizationRecommendation](https://www.hl7.org/fhir/immunizationrecommendation.html)                  | :no_entry_sign: |
| [ImplementationGuide](https://www.hl7.org/fhir/implementationguide.html)                  | :no_entry_sign: |
| [Library](https://www.hl7.org/fhir/library.html)                  | :no_entry_sign: |
| [Linkage](https://www.hl7.org/fhir/linkage.html)                  | :no_entry_sign: |
| [List](https://www.hl7.org/fhir/list.html)                  | :no_entry_sign: |
| [Location](https://www.hl7.org/fhir/location.html)                  | :no_entry_sign: |
| [Measure](https://www.hl7.org/fhir/measure.html)                  | :no_entry_sign: |
| [MeasureReport](https://www.hl7.org/fhir/measurereport.html)                  | :no_entry_sign: |
| [Media](https://www.hl7.org/fhir/media.html)                  | :no_entry_sign: |
| [Medication](https://www.hl7.org/fhir/medication.html)                  | :no_entry_sign: |
| [MedicationAdministration](https://www.hl7.org/fhir/medicationadministration.html)                  | :no_entry_sign: |
| [MedicationDispense](https://www.hl7.org/fhir/medicationdispense.html)                  | :no_entry_sign: |
| [MedicationStatement](https://www.hl7.org/fhir/medicationstatement.html)                  | :no_entry_sign: |
| [MessageDefinition](https://www.hl7.org/fhir/messagedefinition.html)                  | :no_entry_sign: |
| [MessageHeader](https://www.hl7.org/fhir/messageheader.html)                  | :no_entry_sign: |
| [NamingSystem](https://www.hl7.org/fhir/namingsystem.html)                  | :no_entry_sign: |
| [NutritionOrder](https://www.hl7.org/fhir/nutritionorder.html)                  | :no_entry_sign: |
| [Observation](https://www.hl7.org/fhir/observation.html)                  | :no_entry_sign: |
| [OperationDefinition](https://www.hl7.org/fhir/operationdefinition.html)                  | :no_entry_sign: |
| [OperationOutcome](https://www.hl7.org/fhir/operationoutcome.html)                  | :no_entry_sign: |
| [Organization](https://www.hl7.org/fhir/organization.html)                  | :no_entry_sign: |
| [Parameters](https://www.hl7.org/fhir/parameters.html)                  | :no_entry_sign: |
| [Patient](https://www.hl7.org/fhir/patient.html)                  | :no_entry_sign: |
| [PaymentNotice](https://www.hl7.org/fhir/paymentnotice.html)                  | :no_entry_sign: |
| [PaymentReconciliation](https://www.hl7.org/fhir/paymentreconciliation.html)                  | :no_entry_sign: |
| [Person](https://www.hl7.org/fhir/person.html)                  | :no_entry_sign: |
| [PlanDefinition](https://www.hl7.org/fhir/plandefinition.html)                  | :no_entry_sign: |
| [Practitioner](https://www.hl7.org/fhir/practitioner.html)                  | :no_entry_sign: |
| [PractitionerRole](https://www.hl7.org/fhir/practitionerrole.html)                  | :no_entry_sign: |
| [Procedure](https://www.hl7.org/fhir/procedure.html)                  | :no_entry_sign: |
| [ProcedureRequest](https://www.hl7.org/fhir/procedurerequest.html)                  | :no_entry_sign: |
| [ProcessRequest](https://www.hl7.org/fhir/processrequest.html)                  | :no_entry_sign: |
| [ProcessResponse](https://www.hl7.org/fhir/processresponse.html)                  | :no_entry_sign: |
| [Provenance](https://www.hl7.org/fhir/provenance.html)                  | :no_entry_sign: |
| [Questionnaire](https://www.hl7.org/fhir/questionnaire.html)                  | :no_entry_sign: |
| [QuestionnaireResponse](https://www.hl7.org/fhir/questionnaireresponse.html)                  | :no_entry_sign: |
| [ReferralRequest](https://www.hl7.org/fhir/referralrequest.html)                  | :no_entry_sign: |
| [RelatedPerson](https://www.hl7.org/fhir/relatedperson.html)                  | :no_entry_sign: |
| [RequestGroup](https://www.hl7.org/fhir/requestgroup.html)                  | :no_entry_sign: |
| [ResearchStudy](https://www.hl7.org/fhir/researchstudy.html)                  | :no_entry_sign: |
| [ResearchSubject](https://www.hl7.org/fhir/researchsubject.html)                  | :no_entry_sign: |
| [RiskAssessment](https://www.hl7.org/fhir/riskassessment.html)                  | :no_entry_sign: |
| [Schedule](https://www.hl7.org/fhir/schedule.html)                  | :no_entry_sign: |
| [SearchParameter](https://www.hl7.org/fhir/searchparameter.html)                  | :no_entry_sign: |
| [Sequence](https://www.hl7.org/fhir/sequence.html)                  | :no_entry_sign: |
| [ServiceDefinition](https://www.hl7.org/fhir/servicedefinition.html)                  | :no_entry_sign: |
| [Slot](https://www.hl7.org/fhir/slot.html)                  | :no_entry_sign: |
| [Specimen](https://www.hl7.org/fhir/speciment.html)                  | :no_entry_sign: |
| [StructureDefinition](https://www.hl7.org/fhir/structuredefinition.html)                  | :no_entry_sign: |
| [StructureMap](https://www.hl7.org/fhir/structuremap.html)                  | :no_entry_sign: |
| [Subscription](https://www.hl7.org/fhir/subscription.html)                  | :no_entry_sign: |
| [Substance](https://www.hl7.org/fhir/substance.html)                  | :no_entry_sign: |
| [SupplyDelivery](https://www.hl7.org/fhir/supplydelivery.html)                  | :no_entry_sign: |
| [SupplyRequest](https://www.hl7.org/fhir/supplyrequest.html)                  | :no_entry_sign: |
| [Task](https://www.hl7.org/fhir/task.html)                  | :no_entry_sign: |
| [TestScript](https://www.hl7.org/fhir/testscript.html)                  | :no_entry_sign: |
| [TestReport](https://www.hl7.org/fhir/testreport.html)                  | :no_entry_sign: |
| [ValueSet](https://www.hl7.org/fhir/valueset.html)                  | :no_entry_sign: |
| [VisionPrescription](https://www.hl7.org/fhir/visionprescription.html)                  | :no_entry_sign: |
