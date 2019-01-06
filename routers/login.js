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

const {
  verifyCredentials
} = require('../models/user')

const {
  create 
} = require('../utils/jwt')

/**
 * Returns a JWT for the user that is valid for 24 hours
 */
router.post('/', [dataValidator(schema)], async (req, res) => {
  const { username, password } = req.body
  
  const valid = await verifyCredentials(username, password)

  if (valid) {
    const token = await create(username)
    res.json({ token })
  } else {
    res.sendStatus(401)
  }

  res.end()
})

module.exports = router