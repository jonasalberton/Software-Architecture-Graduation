const express = require('express');

const { userRouter } = require('./routes/user-router');
const { accountRouter } = require('./routes/account-router');

// Constants
const PORT = 3000;

const server = express();

server.use('/api/users', userRouter);
server.use('/api/account', accountRouter);


server.listen(PORT, () => console.log('Server running!'));