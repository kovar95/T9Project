const {validationResult, check} = require('express-validator');

exports.runValidation = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({error: errors.array()[0].msg});
    }
    next()
}

exports.enteredNumbersValidator = [
  check('phoneword').custom((value) => {
    if (value.length === 0) {
      throw new Error('You must enter something to see the words!');
    } else if(value.length === 1) {
      throw new Error('You must enter at least two numbers!');
    }

    let numbers = /^[2-9]+$/;
    if (!value.match(numbers)) {
      throw new Error('You entered invalid value!');
    }

    // Indicates the success of this synchronous custom validator
    return true;
  })
];