require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log(`db is connected`);
    })
    .catch((err) => {
      console.log(err);
      console.log(`db is not connected`);
      process.exit(1);
    });
};

module.exports = connectDB;
