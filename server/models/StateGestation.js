const mongoose = require("mongoose");

const { Schema } = mongoose;
const gestationalSchema = require("./Gestational");

const stateGestationSchema = new Schema({
  state: {
    type: String,
    required: true,
  },
  gestationalRegulations: [gestationalSchema],
});

const StateGestational = mongoose.model(
  "StateGestational",
  stateGestationSchema
);

module.exports = StateGestational;
