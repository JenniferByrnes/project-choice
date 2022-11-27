const mongoose = require("mongoose");

const { Schema } = mongoose;

const regulationsSchema = new Schema({
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
  parental_notification_required: {
    type: Boolean,
  },
  banned_after_weeks_since_LMP: {
    type: Number,
  },
  exception_life: {
    type: Boolean,
  },
  exception_health: {
    type: String,
  },
});

const Regulations = mongoose.model("Regulations", regulationsSchema);

module.exports = Regulations;
