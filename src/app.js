const express = require("express");
const { adminAuth } = require("./middlewares/auth");

const app = express();

app.use("/user", adminAuth);

app.get("/user/getData", (req, res) => {
  res.send({ firstName: "Anupreet", lastName: "Srivastava" });
});

app.post("/user/addData", (req, res) => {
  // Saving to DB
  res.send("Data saved successfully!!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000.....");
});
