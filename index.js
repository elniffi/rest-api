const express = require('express')

const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const { port } = require('./config.json')

const app = express()
const logger = morgan('dev')

const usersRouter = require('./routers/users')
const authenticationRouter = require('./routers/authentication')

app.use(logger)
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/users', usersRouter)
app.use('/authentication', authenticationRouter)

app.use(function (req, res, next) {
  res.sendStatus(404)
  res.end()
})

app.listen(port, () => {
  console.log(`server listening to traffic on port ${port}`)
})