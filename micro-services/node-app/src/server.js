const express = require('express');
const bodyParser = require('body-parser');

const { userRouter } = require('./routes/user-router');
const { accountRouter } = require('./routes/account-router');

const server = express();

server.use(bodyParser);
server.use('/api/users', userRouter);
server.use('/api/account', accountRouter);


server.listen(3000, () => console.log('Server running!'));