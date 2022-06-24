const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.json({ message: "teste"});

});


module.exports.userRouter = router;