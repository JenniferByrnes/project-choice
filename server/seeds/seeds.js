const db = require("../config/connection");
const { Regulations } = require("../models");
const fs = require("fs");
const util = require("util");

db.once("open", async () => {
  const minorLaws = await fs.readFile("./laws.json", "utf-8", (error, data) =>
    error ? console.log(error) : console.log(JSON.parse(data))
  );

  await Regulations.deleteMany();

  await Regulations.insertMany(minorLaws);

  process.exit();
});
