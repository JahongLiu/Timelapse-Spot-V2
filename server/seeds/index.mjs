import mongoose from "mongoose";
import cities from "./cities.mjs";

import { descriptors, places } from "./seedHelpers.mjs";
import Spot from "../models/Spot.mjs";

mongoose.connect("mongodb://localhost:27017/timelapse-spot-v2");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error:"));
db.once("open", () => {
  console.log("Mongo databse connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Spot.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 100) + 10;
    const spot = new Spot({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}}`,
    });
    await spot.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});