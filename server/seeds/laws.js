var apiKey = "O+Pe+i+97g5AJTkg";
const fs = require("fs");
const minor = [];
const gestational_limits = [];
const insurance_coverage = [];
const waiting_periods = [];

function minorApi() {
  fetch("http://api.abortionpolicyapi.com/v1/minors/states/", {
    headers: { token: apiKey },
  })
    .then((response) => response.json())
    .then((res) => {
      for (const state in res) {
        // console.log({ [state]: res[state] });
        minor.push({ state: state, minorRegulations: res[state] });
      }

      return minor;
    })
    .then((lawData) =>
      fs.writeFileSync("./minor.json", JSON.stringify(lawData))
    )
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
        gestational_limits.push({
          state: state,
          gestationalRegulations: res[state],
        });
      }

      return gestational_limits;
    })
    .then((lawData) =>
      fs.writeFileSync("./gestational.json", JSON.stringify(lawData))
    )
    .catch((err) => console.error(err));
}

function insuranceApi() {
  fetch("http://api.abortionpolicyapi.com/v1/insurance_coverage/states/", {
    headers: { token: apiKey },
  })
    .then((response) => response.json())
    .then((res) => {
      for (const state in res) {
        // console.log({ [state]: res[state] });
        insurance_coverage.push({
          state: state,
          insuranceRegulations: res[state],
        });
      }

      return insurance_coverage;
    })
    .then((lawData) =>
      fs.writeFileSync("./insurance.json", JSON.stringify(lawData))
    )
    .catch((err) => console.error(err));
}

function waitinperiodsgApi() {
  fetch("http://api.abortionpolicyapi.com/v1/waiting_periods/states/", {
    headers: { token: apiKey },
  })
    .then((response) => response.json())
    .then((res) => {
      for (const state in res) {
        // console.log({ [state]: res[state] });
        waiting_periods.push({
          state: state,
          waitingPeriodRegulations: res[state],
        });
      }

      return waiting_periods;
    })
    .then((lawData) =>
      fs.writeFileSync("./waitingperiods.json", JSON.stringify(lawData))
    )
    .catch((err) => console.error(err));
}

minorApi();
gestationApi();
insuranceApi();
waitinperiodsgApi();
