import mongoose from "mongoose";

// create a schema

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 18,
  },
});

// Model

const User = mongoose.model("User", userSchema);

const user = await User.create({
  name: "Aman",
  email: "aman@gmail.com",
  age: 20,
});
const users = await User.find({ age: { $gte: 18 } });

await user.save();
