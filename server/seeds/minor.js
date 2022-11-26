var apiKey = "O+Pe+i+97g5AJTkg";
const fs = require("fs");
const laws = [];
const gestational_limits = [];

function minorApi() {
  fetch("http://api.abortionpolicyapi.com/v1/minors/states/", {
    headers: { token: apiKey },
  })
    .then((response) => response.json())
    .then((res) => {
      for (const state in res) {
        // console.log({ [state]: res[state] });
        laws.push({ [state]: res[state] });
      }

      return laws;
    })
    .then((lawData) => fs.writeFileSync("./laws.json", JSON.stringify(lawData)))
    .catch((err) => console.error(err));
}

function gestationApi() {
  fetch("http://api.abortionpolicyapi.com/v1/gestational_limits/states/", {
    headers: { token: apiKey },
  })
    .then((response) => response.json())
    .then((res) => {
      for (const state in res) {
        // console.log({ [state]: res[state] });
        laws.push({ [state]: res[state] });
      }

      return laws;
    })
    .then((lawData) =>
      fs.writeFileSync("./gestational.json", JSON.stringify(lawData))
    )
    .catch((err) => console.error(err));
}

minorApi();
gestationApi();
