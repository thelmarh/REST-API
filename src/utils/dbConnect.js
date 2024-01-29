const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("connected to database"))
    .catch((error) => console.log(error));
};

module.exports = dbConnect;
