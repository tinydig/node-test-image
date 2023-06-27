const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (_, res) => {
    res.send({ version: 'v0.0.1' });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = app;

