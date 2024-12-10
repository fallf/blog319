const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactInfoSchema = new Schema({
  name: { type: String, required: true },
  userEmail: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ContactInfo", ContactInfoSchema);
