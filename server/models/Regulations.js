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
});

const Regulations = mongoose.model("Regulations", regulationsSchema);

module.exports = Regulations;
