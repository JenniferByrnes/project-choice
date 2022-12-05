const mongoose = require("mongoose");

const { Schema } = mongoose;
const waitingSchema = require("./WaitingPeriod");

const stateWaitingPeriodSchema = new Schema({
  state: {
    type: String,
    required: true,
  },
  waitingPeriodRegulations: [waitingSchema],
});

const StateWaitingPeriod = mongoose.model(
  "StateWaitingPeriod",
  stateWaitingPeriodSchema
);

module.exports = StateWaitingPeriod;
