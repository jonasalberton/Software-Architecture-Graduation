const router = require('express').Router();
const { getUsers } = require('../controllers/UserController');

router.get('/', getUsers);

module.exports.userRouter = router;