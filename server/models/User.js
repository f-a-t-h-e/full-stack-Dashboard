import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      max: 50,
      unique: [true, "Email has to be unique"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      min: 5,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
