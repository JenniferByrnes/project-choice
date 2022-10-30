var rp = require("request-promise");

var apiKey = "O+Pe+i+97g5AJTkg";

// See if Medicaid can cover abortion in Virginia
rp({
  uri: "http://api.abortionpolicyapi.com/v1/insurance_coverage/states/VA",
  method: "GET",
  headers: { token: apiKey },
  json: true,
})
  .then(function success(response) {
    // Make sure values were returned for Virginia
    if (response && response.Virginia) {
      // Get all fields that contain 'medicaid_'
      var keys = Object.keys(response.Virginia).filter((key) => {
        return key.indexOf("medicaid") > -1 && response.Virginia[key] === true;
      });

      // Looking at field reference, you can see that the scenarios in which medicaid
      // covers abortion are described after the first two descriptors.
      var message = "In Virginia, Medicaid covers abortion when it's: ";
      message += keys
        .map((key) => {
          return key.split("_").slice(2).join(" ");
        })
        .join(", ");
      message += "\n(The API data are not currently optimized for grammar.)";
      console.log(message);
    }
  })
  .catch(function error(response) {
    console.log(response.error);
  });
