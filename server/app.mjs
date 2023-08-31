import express from "express";
import mongoose from "mongoose";
import Spot from "./models/Spot.mjs";

const app = express();

mongoose.connect("mongodb://localhost:27017/timelapse-spot-v2");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error:"));
db.once("open", () => {
  console.log("Mongo databse connected");
});

app.get("/createspot", async (req, res) => {
  const spot = new Spot({
    title: "test spot",
    price: "0",
    description: "this is for testing",
    location: "testing",
  });
  await spot.save();
  res.send(spot);
});

app.get("/", (req, res) => {
  res.send("HELLO FROM JAHONG!");
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
