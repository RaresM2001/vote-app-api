const express = require('express');
const bodyParser = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');


require('./database');
require('dotenv').config();

const authRouter = require('./routers/auth.js');
const memberRouter = require('./routers/member');
const pollRouter = require('./routers/poll');
const mailgunRouter = require('./routers/mailgun');

const PORT = process.env.PORT || 8081;
var app = express();
app.use(cors({
    origin: 'https://vote-application-mrvit.herokuapp.com',
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/members', memberRouter);
app.use('/polls', pollRouter)
app.use('/mailgun', mailgunRouter);

app.use(serveStatic(__dirname + '/client/dist'));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})