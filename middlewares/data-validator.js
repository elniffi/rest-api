const Ajv = require('ajv')
const ajv = new Ajv()

const { env } = require('../config.json')

module.exports = (schema) => {
  const validate = ajv.compile(schema);

  return (req, res, next) => {
    const data = req.body
    const valid = validate(data)

    if (valid) {
      next()
    } else {
      if (env === 'dev') {
        res.status(400)
        res.json(validate.errors)
      } else {
        res.sendStatus(400)
      }

      res.end()
    }
  }
}