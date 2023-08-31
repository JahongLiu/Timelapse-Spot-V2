import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://localhost:27017/timelapse-spot-v2");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error:"));
db.once("open", () => {
  console.log("Mongo databse connected");
});

app.get("/", (req, res) => {
  res.send("HELLO FROM JAHONG!");
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
