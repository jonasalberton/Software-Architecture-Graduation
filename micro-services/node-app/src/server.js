const express = require("express");
const mongoose = require("mongoose");
var os = require("os");
var hostname = os.hostname();

const { userRouter } = require("./routes/user-router");
const { transactionRouter } = require("./routes/transaction-router");

// Constants
const PORT = 3000;
const DB = 'mongodb://root:example@192.168.16.100:27017/?authMechanism=DEFAULT';

const server = express();

server.use(express.json());
server.use("/api/user", userRouter);
server.use("/api/transaction", transactionRouter);

async function main() {
  console.log('hostm', hostname);
  await mongoose.connect(DB);
  server.listen(PORT, () => console.log("Server running!", hostname));
}

main().catch((err) => console.log(err));
