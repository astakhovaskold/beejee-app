const express = require('express');
const logger = require('morgan');
require('dotenv').config();

const authRouter = require('./routes/auth');
const tasksRouter = require('./routes/tasks');
const auth = require('./middleware/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/tasks', auth, tasksRouter);

module.exports = app;
