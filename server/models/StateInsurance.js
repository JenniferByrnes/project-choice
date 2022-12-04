const mongoose = require("mongoose");

const { Schema } = mongoose;
const insuranceSchema = require("./Insurance");

const stateInsuranceSchema = new Schema({
  state: {
    type: String,
    required: true,
  },
  insuranceRegulations: [insuranceSchema],
});

const StateInsurance = mongoose.model("StateInsurance", stateInsuranceSchema);

module.exports = StateInsurance;
