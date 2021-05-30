const expres = require('express');
const router = expres.Router();

//validators
const { runValidation, enteredNumbersValidator } = require('../validators');

const {generate} = require('../helpers')

router.get('/phonewords/:phoneword',enteredNumbersValidator, runValidation, generate);

module.exports = router;