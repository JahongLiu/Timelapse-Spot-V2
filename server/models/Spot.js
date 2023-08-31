import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SpotSchema = new Schema({
  title: String,
  price: String,
  description: String,
  location: String,
});

export default mongoose.model("Spot", SpotSchema);
