'use strict'

const express = require('express')
const bodyParser = require('body-parser')
require('./db');
const routes = require('./routes/index')
const morgan = require("morgan")

const app = express()

//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(morgan("dev"));

app.use('/', routes)


module.exports = app