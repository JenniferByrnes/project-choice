const mongoose = require("mongoose");

// This is where we connect to out MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
