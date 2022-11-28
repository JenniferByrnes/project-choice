const db = require("../config/connection");
const { Regulations } = require("../models");
const fs = require("fs");
const util = require("util");

db.once("open", async () => {
  const minorLaws = await fs.readFile(
    "./seeds/minor.json",
    "utf-8",
    (error, data) =>
      error ? console.log(error) : console.log(JSON.parse(data))
  );

  await Regulations.deleteMany();

  await Regulations.insertMany(minorLaws);
  console.log("minor Laws Seeded");

  process.exit();
});

db.once("open", async () => {
  const insuranceLaws = await fs.readFile(
    "./seeds/insurance.json",
    "utf-8",
    (error, data) =>
      error ? console.log(error) : console.log(JSON.parse(data))
  );

  await Regulations.deleteMany();

  await Regulations.insertMany(insuranceLaws);

  process.exit();
});

db.once("open", async () => {
  const waitingperiodsLaws = await fs.readFile(
    "./seeds/waitingperiods.json",
    "utf-8",
    (error, data) =>
      error ? console.log(error) : console.log(JSON.parse(data))
  );

  await Regulations.deleteMany();

  await Regulations.insertMany(waitingperiodsLaws);

  process.exit();
});

db.once("open", async () => {
  const gestationalLaws = await fs.readFile(
    "./seeds/gestational.json",
    "utf-8",
    (error, data) =>
      error ? console.log(error) : console.log(JSON.parse(data))
  );

  await Regulations.deleteMany();

  await Regulations.insertMany(gestationalLaws);

  process.exit();
});
