const mongoose = require("mongoose");

const { Schema } = mongoose;

const gestationalSchema = new Schema({
  banned_after_weeks_since_LMP: {
    type: Number,
  },
  exception_life: {
    type: Boolean,
  },
  exception_health: {
    type: String,
  },
  exception_rape_or_incest: {
    type: Boolean,
  },
  exception_fetal: {
    type: String,
  },
});

module.exports = gestationalSchema;
