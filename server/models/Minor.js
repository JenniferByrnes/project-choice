const mongoose = require("mongoose");

const { Schema } = mongoose;

const minorSchema = new Schema({
  parental_consent_required: {
    type: Boolean,
  },
  judicial_bypass_available: {
    type: Boolean,
  },
  below_age: {
    type: Number,
  },
  parents_required: {
    type: Number,
  },
  allow_minor_to_consent: {
    type: Boolean,
  },
  // parental_notification_required: {
  //   type: Boolean,
  // },
  // banned_after_weeks_since_LMP: {
  //   type: Number,
  // },
  // exception_life: {
  //   type: Boolean,
  // },
  // exception_health: {
  //   type: String,
  // },
  // exception_rape_or_incest: {
  //   type: Boolean,
  // },
  // exception_fetal: {
  //   type: String,
  // },
  // exchange_coverage_no_restrictions: {
  //   type: Boolean,
  // },
  // medicaid_coverage_provider_patient_decision: {
  //   type: Boolean,
  // },
  // private_coverage_no_restriction: {
  //   type: Boolean,
  // },
  // exchange_exception_rape_or_incest: {
  //   type: Boolean,
  // },
  // medicaid_exception_rape_or_incest: {
  //   type: Boolean,
  // },
  // medicaid_exception_life: {
  //   type: Boolean,
  // },
  // exchange_exception_life: {
  //   type: Boolean,
  // },
  // exchange_exception_health: {
  //   type: String,
  // },
  // medicaid_exception_fetal: {
  //   type: String,
  // },
});

module.exports = minorSchema;
