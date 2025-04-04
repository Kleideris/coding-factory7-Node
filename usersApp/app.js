const express = require('express')
const app = express()

app.use(express.json())
const user = require('./routes/user.routes.js')

app.use('/api/users', user)

module.exports = app