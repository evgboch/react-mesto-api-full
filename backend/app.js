const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const mainRouter = require('./routes/index');
const catchErrors = require('./middlewares/errors');
const { corsHandler } = require('./middlewares/corsHandler');

const { PORT = 3000 } = process.env;

const app = express();

app.use(helmet());
app.use(corsHandler);
app.use(bodyParser.json());
app.use(requestLogger);
app.use(mainRouter);
app.use(errorLogger);
app.use(errors());
app.use(catchErrors);

mongoose.connect('mongodb://localhost:27017/mestodb');

app.listen(PORT);
