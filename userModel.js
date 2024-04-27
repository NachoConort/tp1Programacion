const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String
    },
    email: {
      type: String
    },
    contraseña: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const modelUser = mongoose.model("users", userSchema);
module.exports = modelUser;