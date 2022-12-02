const mongoose = require("mongoose");

const { Schema } = mongoose;

const insuranceSchema = new Schema({
  requires_coverage: {
    type: Boolean,
  },
  private_coverage_no_restriction: {
    type: Boolean,
  },
  private_exception_life: {
    type: Boolean,
  },
  private_exception_health: {
    type: String,
  },
  private_exception_fetal: {
    type: String,
  },
  private_exception_rape_or_incest: {
    type: Boolean,
  },
  exchange_coverage_no_restrictions: {
    type: Boolean,
  },
  medicaid_coverage_provider_patient_decision: {
    type: Boolean,
  },
  exchange_forbids_coverage: {
    type: Boolean,
  },
  exchange_exception_rape_or_incest: {
    type: Boolean,
  },
  medicaid_exception_rape_or_incest: {
    type: Boolean,
  },
  medicaid_exception_life: {
    type: Boolean,
  },
  exchange_exception_life: {
    type: Boolean,
  },
  exchange_exception_health: {
    type: String,
  },
  medicaid_exception_fetal: {
    type: String,
  },
});

module.exports = insuranceSchema;
