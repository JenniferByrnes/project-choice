const mongoose = require("mongoose");

const { Schema } = mongoose;
const minorSchema = require("./Minor");

const stateMinorSchema = new Schema({
  state: {
    type: String,
    required: true,
  },
  minorRegulations: [minorSchema],
});

const StateMinor = mongoose.model("StateMinor", stateMinorSchema);

module.exports = StateMinor;

// parental_consent_required: Boolean
// judicial_bypass_available: Boolean
// below_age: Int
// parents_required: Int
// allow_minor_to_consent: Boolean
