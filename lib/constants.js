const RESOURCE_TYPES = Object.freeze({
  ACCOUNT: 'Account',
  ACTIVITY_DEFINITION: 'ActivityDefinition',
  ALLERGY_INTOLERANCE: 'AllergyIntolerance',
  ADVERSE_EVENT: 'AdverseEvent',
  APPOINTMENT: 'Appointment',
  APPOINTMENT_RESPONSE: 'AppointmentResponse',
  AUDIT_EVENT: 'AuditEvent',
  BASIC: 'Basic',
  BINARY: 'Binary',
  BODY_SITE: 'BodySite',
  BUNDLE: 'Bundle',
  CAPABILITY_STATEMENT: 'CapabilityStatement',
  CARE_PLAN: 'CarePlan',
  CARE_TEAM: 'CareTeam',
  CHARGE_ITEM: 'ChargeItem',
  CLAIM: 'Claim',
  CLAIM_RESPONSE: 'ClaimResponse',
  CLINICAL_IMPRESSION: 'ClinicalImpression',
  CODE_SYSTEM: 'CodeSystem',
  COMMUNICATION: 'Communication',
  COMMUNICATION_REQUEST: 'CommunicationRequest',
  COMPARTMENT_DEFINITION: 'CompartmentDefinition',
  COMPOSITION: 'Composition',
  CONCEPT_MAP: 'ConceptMap',
  CONDITION: 'Condition',
  CONSERT: 'Consent',
  CONTRACT: 'Contract',
  COVERAGE: 'Coverage',
  DATA_ELEMENT: 'DataElement',
  DETECTED_ISSUE: 'DetectedIssue',
  DEVICE: 'Device',
  DEVICE_COMPONENT: 'DeviceComponent',
  DEVICE_METRIC: 'DeviceMetric',
  DEVICE_REQUEST: 'DeviceRequest',
  DEVICE_USE_STATEMENT: 'DeviceUseStatement',
  DIAGNOSTIC_REPORT: 'DiagnosticReport',
  DOCUMENT_MANIFEST: 'DocumentManifest',
  DOCUMENT_REFERENCE: 'DocumentReference',
  ELIGIBILITY_REQUEST: 'EligibilityRequest',
  ELIGIBILITY_RESPONSE: 'EligibilityResponse',
  ENCOUNTER: 'Encounter',
  ENDPOINT: 'Endpoint',
  ENROLLMENT_REQUEST: 'EnrollementRequest',
  ENROLLMENT_RESPONSE: 'EnrollmentResponse',
  EPISODE_OF_CARE: 'EpisodeOfCare',
  EXPANSION_PROFILE: 'ExpansionProfile',
  EXPLANATION_OF_BENEFIT: 'ExplanationOfBenefit',
  FAMILY_MEMBER_HISTORY: 'FamilyMemberHistory',
  FLAG: 'Flag',
  GOAL: 'Goal',
  GRAPH_DEFINITION: 'GraphDefinition',
  GROUP: 'Group',
  GUIDANCE_RESPONSE: 'GuidanceResponse',
  HEALTHCARE_SERVICE: 'HealthcareService',
  IMAGING_MANIFEST: 'ImagingManifest',
  IMAGING_STUDY: 'ImagingStudy',
  IMMUNIZATION: 'Immunization',
  IMMUNIZATION_RECOMMENDATION: 'ImmunizationRecommendation',
  IMPLEMENTATION_GUIDE: 'ImplementationGuide',
  LIBRARY: 'Library',
  LINKAGE: 'Linkage',
  LIST: 'List',
  LOCATION: 'Location',
  MEASURE: 'Measure',
  MEASURE_REPORT: 'MeasureReport',
  MEDIA: 'Media',
  MEDICATION: 'Medication',
  MEDICATION_ADMINISTRATION: 'MedicationAdministration',
  MEDICATION_DISPENSE: 'MedicationDispense',
  MEDICATION_STATEMENT: 'MedicationStatement',
  MESSAGE_DEFINITION: 'MessageDefinition',
  MESSAGE_HEADER: 'MessageHeader',
  NAMING_SYSTEM: 'NamingSystem',
  NUTRITION_ORDER: 'NutritionOrder',
  OBSERVATION: 'Observation',
  OPERATION_DEFINITION: 'OperationDefinition',
  OPERATION_OUTCOME: 'OperationOutcome',
  ORGANIZATION: 'Organization',
  PARAMETERS: 'Parameters',
  PATIENT: 'Patient',
  PAYMENT_NOTICE: 'PaymentNotice',
  PAYMENT_RECONCILIATION: 'PaymentReconciliation',
  PERSON: 'Person',
  PLAN_DEFINITION: 'PlanDefinition',
  PRACTITIONER: 'Practitioner',
  PRACTITIONER_ROLE: 'PractitionerRole',
  PROCEDURE: 'Procedure',
  PROCEDURE_REQUEST: 'ProcedureRequest',
  PROCESS_REQUEST: 'ProcessRequest',
  PROCESS_RESPONSE: 'ProcessResponse',
  PROVENANCE: 'Provenance',
  QUESTIONNAIRE: 'Questionnaire',
  QUESTIONNAIRE_RESPONSE: 'QuestionnaireResponse',
  REFERRAL_REQUEST: 'ReferralRequest',
  RELATED_PERSON: 'RelatedPerson',
  REQUEST_GROUP: 'RequestGroup',
  RESEARCH_STUDY: 'ResearchStudy',
  RESEARCH_SUBJECT: 'ResearchSubject',
  RISK_ASSESSMENT: 'RiskAssessment',
  SCHEDULE: 'Schedule',
  SEARCH_PARAMETER: 'SearchParameter',
  SEQUENCE: 'Sequence',
  SERVICE_DEFINITION: 'ServiceDefinition',
  SLOT: 'Slot',
  SPECIMENT: 'SPECIMEN',
  STRUCTURE_DEFINITION: 'StructureDefinition',
  STRUCTURE_MAP: 'StructureMap',
  SUBSCRIPTION: 'Subscription',
  SUBSTANCE: 'Substance',
  SUPPLY_DELIVERY: 'SupplyDelivery',
  SUPPLY_REQUEST: 'SupplyRequest',
  TASK: 'Task',
  TEST_SCRIPT: 'TestScript',
  TEST_REPORT: 'TestReport',
  VALUE_SET: 'ValueSet',
  VISION_PRESCRIPTION: 'VisionPrescription'
});

const RESOURCE_TYPES_ARRAY = Object.keys(RESOURCE_TYPES).map(key => RESOURCE_TYPES[key]);

module.exports = Object.freeze({
  RESOURCE_TYPES,
  RESOURCE_TYPES_ARRAY
});
