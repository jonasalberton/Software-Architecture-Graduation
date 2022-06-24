const router = require('express').Router();

router.get('/:id', (req, res, next) => {
    res.json({ message: "teste"});
});

router.get('/', (req, res, next) => {
    res.json({ message: "teste"});
});


router.delete('/:id', (req, res, next) => {
    res.json({ message: "teste"});
});


router.post('/', (req, res, next) => {
    res.json({ message: "teste"});

});

router.put('/:id', (req, res, next) => {
    res.json({ message: "teste"});

});


module.exports.accountRouter = router;