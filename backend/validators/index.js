const {validationResult, check} = require('express-validator');

exports.runValidation = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({error: errors.array()[0].msg});
    }
    next()
}

exports.enteredNumbersValidator = [
  check('phoneword')
  .not()
  .isEmpty()
  .isLength({min:2})
  .withMessage('At least two numbers are reqired!')
];