const Ajv = require('ajv')
const { env } = require('../config.json')

const isDev = env === 'dev'
const ajv = new Ajv({
  allErrors: isDev ? true : false
})

module.exports = (schema) => {
  const validate = ajv.compile(schema);

  return (req, res, next) => {
    const data = req.body
    const valid = validate(data)

    if (valid) {
      next()
    } else {
      if (isDev) {
        console.log(`data validation failed`, validate.errors)
        console.log('data recieved was', data)
    
        res.status(400)
        res.json(validate.errors)
      } else {
        res.sendStatus(400)
      }

      res.end()
    }
  }
}