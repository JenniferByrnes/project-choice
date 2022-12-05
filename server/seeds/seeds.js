const db = require("../config/connection");
const {
  StateMinor,
  StateGestational,
  StateInsurance,
  StateWaitingPeriod,
} = require("../models");
const fs = require("fs");
const util = require("util");

db.once("open", async () => {
  let minorLawData;
  let gestationalLawData;
  let insuranceLawData;
  let waitingLawData;

  const minorLaws = fs.readFile("./seeds/minor.json", "utf-8", (error, data) =>
    error ? console.log(error) : (minorLawData = JSON.parse(data))
  );

  const gestationalLaws = fs.readFile(
    "./seeds/gestational.json",
    "utf-8",
    (error, data) =>
      error ? console.log(error) : (gestationalLawData = JSON.parse(data))
  );

  const insuranceLaws = fs.readFile(
    "./seeds/insurance.json",
    "utf-8",
    (error, data) =>
      error ? console.log(error) : (insuranceLawData = JSON.parse(data))
  );

  const waitingperiodsLaws = await fs.readFile(
    "./seeds/waitingperiods.json",
    "utf-8",
    (error, data) =>
      error ? console.log(error) : (waitingLawData = JSON.parse(data))
  );

  await StateMinor.deleteMany();

  await StateMinor.insertMany(minorLawData);

  await StateGestational.deleteMany();

  await StateGestational.insertMany(gestationalLawData);

  await StateInsurance.deleteMany();

  await StateInsurance.insertMany(insuranceLawData);

  await StateWaitingPeriod.deleteMany();

  await StateWaitingPeriod.insertMany(waitingLawData);

  process.exit();
});
