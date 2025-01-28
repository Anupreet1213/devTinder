const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Anupreet", lastName: "Srivastava" });
});

app.post("/user", (req, res) => {
  // Saving to DB
  res.send("Data saved successfully!!");
});

app.use("/test", (req, res) => {
  res.send("Hello World!!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000.....");
});
