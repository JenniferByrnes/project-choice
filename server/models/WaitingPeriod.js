const mongoose = require("mongoose");

const { Schema } = mongoose;

const waitingSchema = new Schema({
  waiting_period_hours: {
    type: Number,
  },
  counseling_visits: {
    type: Number,
  },
  exception_health: {
    type: String,
  },
  waiting_period_notes: {
    type: String,
  },
});

module.exports = waitingSchema;
