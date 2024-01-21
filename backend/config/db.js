const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("succesfully cnnnected");
  })
  .catch((err) => {
    console.log("failed" + err);
  });
