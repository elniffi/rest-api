const express = require('express')
const router = express.Router()

const dataValidator = require('../middlewares/data-validator')
const schema = {
  properties: {
    username: {
      type: 'string',
      format: 'email'
    },
    password: {
      type: 'string',
      minLength: 8,
      maxLength: 255
    }
  },
  required: ['username', 'password'],
  additionalProperties: false
}

/**
 * Returns a JWT for the user that is valid for 24 hours
 */
router.post('/', [dataValidator(schema)], (req, res) => {
  res.sendStatus(200)
  res.end()
})

module.exports = router