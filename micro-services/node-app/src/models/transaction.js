const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["CREDIT", "DEBIT"],
    default: "CREDIT",
  },
  value: { type: Number },
  userId: { type: String },
});

module.exports.Transaction = mongoose.model("Transaction", transactionSchema);
