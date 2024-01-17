import mongoose from "mongoose";
const { Schema } = mongoose;

const menu = new Schema({
  name: { type: String, required: true },
  recipe: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});


export default mongoose.model("menu", menu);
