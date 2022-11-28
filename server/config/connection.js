const mongoose = require("mongoose");

// This is where we connect to our MongoDB//

// process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/projectchoice",
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/project-choice",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
