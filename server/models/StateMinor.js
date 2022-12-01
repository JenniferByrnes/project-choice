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
