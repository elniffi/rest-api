const express = require('express')

const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const { port } = require('./config.json')

const app = express()
const logger = morgan('dev')

app.use(logger)
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(cookieParser())

app.listen(port, () => {
  console.log(`server listening to traffic on port ${port}`)
})