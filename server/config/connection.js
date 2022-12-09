const mongoose = require("mongoose");

// This is where we connect to our MongoDB//

// process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/projectchoice" .  ,
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/project-choicess",
// To run seeds - connect to MONGODB_URI - mongodb+srv://projectchoice: .... with no local option.
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
