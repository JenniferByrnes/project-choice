const db = require("../config/connection");
const { StateMinor, StateGestational } = require("../models");
const fs = require("fs");
const util = require("util");

db.once("open", async () => {
  let minorLawData;
  let gestationalLawData;

  const minorLaws = fs.readFile("./seeds/minor.json", "utf-8", (error, data) =>
    error ? console.log(error) : (minorLawData = JSON.parse(data))
  );

  const gestationalLaws = fs.readFile(
    "./seeds/gestational.json",
    "utf-8",
    (error, data) =>
      error ? console.log(error) : (gestationalLawData = JSON.parse(data))
  );

  const insuranceLaws = await fs.readFile(
    "./seeds/insurance.json",
    "utf-8",
    (error, data) =>
      error ? console.log(error) : console.log(JSON.parse(data))
  );

  const waitingperiodsLaws = await fs.readFile(
    "./seeds/waitingperiods.json",
    "utf-8",
    (error, data) =>
      error ? console.log(error) : console.log(JSON.parse(data))
  );

  console.log(gestationalLawData);

  await StateMinor.deleteMany();

  await StateMinor.insertMany(minorLawData);
  // console.log("minor Laws Seeded");

  await StateGestational.deleteMany();

  await StateGestational.insertMany(gestationalLawData);

  // await Regulations.deleteMany();

  // await Regulations.insertMany(insuranceLaws);

  // await Regulations.deleteMany();

  // await Regulations.insertMany(waitingperiodsLaws);

  process.exit();
});

// db.once("open", async () => {
//   const insuranceLaws = await fs.readFile(
//     "./seeds/insurance.json",
//     "utf-8",
//     (error, data) =>
//       error ? console.log(error) : console.log(JSON.parse(data))
//   );

//   await Regulations.deleteMany();

//   await Regulations.insertMany(insuranceLaws);

//   process.exit();
// });

// db.once("open", async () => {
//   const waitingperiodsLaws = await fs.readFile(
//     "./seeds/waitingperiods.json",
//     "utf-8",
//     (error, data) =>
//       error ? console.log(error) : console.log(JSON.parse(data))
//   );

//   await Regulations.deleteMany();

//   await Regulations.insertMany(waitingperiodsLaws);

//   process.exit();
// });

// db.once("open", async () => {
//   const gestationalLaws = await fs.readFile(
//     "./seeds/gestational.json",
//     "utf-8",
//     (error, data) =>
//       error ? console.log(error) : console.log(JSON.parse(data))
//   );

//   await Regulations.deleteMany();

//   await Regulations.insertMany(gestationalLaws);

//   process.exit();
// });
