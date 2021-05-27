exports.generate = (req, res) => {
    const phoneword = req.params.phoneword;

    console.log(phoneword)

    return res.status(200).send(`Numbers are ${phoneword}`);
  };