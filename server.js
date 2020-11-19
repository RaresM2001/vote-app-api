const express = require('express');
const bodyParser = require('express');
const cors = require('cors');

require('./database');
require('dotenv').config()

const PORT = process.env.PORT || 8081;
var app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})