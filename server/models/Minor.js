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
});

module.exports = minorSchema;
