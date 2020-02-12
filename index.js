// code away!
const express = require('express');

const server = require("./server");

// const userRouter = require('./users/userRouter');

// const server = express();

// server.use(express.json());

// server.use('/api/users', userRouter)

server.listen(4000, () => {
  console.log("\n*** Server is running on localhost:4000 **\n");
});
