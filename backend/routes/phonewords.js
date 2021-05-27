const expres = require('express');
const router = expres.Router();

//validators
const { runValidation, enteredNumbersValidator } = require('../validators');

const {generate} = require('../helpers')


router.get('/phonewords/:phoneword',enteredNumbersValidator, runValidation, generate);
// router.get('/phonewords/:phoneword',function (req,res) {
//     res.send(req.params.phoneword)
// });
// router.get('/phonewords',function (req,res) {
//     res.send('Phonewords Running');
// });



module.exports = router;