const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/parapet");
  console.log("Connected to MongoDB");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
