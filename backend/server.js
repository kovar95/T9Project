const express = require("express");
const app = express();
const singleEndpoint = require('./routes/phonewords');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API Running');
  });

app.use('/api', singleEndpoint);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;