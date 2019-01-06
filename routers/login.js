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
} = require('../models/users')

const {
  create 
} = require('../utils/jwt')

/**
 * Returns a JWT for the user that is valid for 24 hours
 */
router.post('/', [dataValidator(schema)], async (req, res) => {
  const { username, password } = req.body

  console.log(`recieved username: ${username} and password: ${password}`)
  
  const valid = await verifyCredentials(username, password)

  if (valid) {
    const token = await create(username)

    console.log(`created a token, it looks like this ${token}`)

    res.json({ token })
  } else {
    res.sendStatus(401)
  }

  console.log('And we are done')

  res.end()
})

/**
 * Invalidate a token, adding it to the blacklist, making any future 
 * requests using that token fail even if it has not yet expired
 */
router.delete('/', (req, res) => {
  res.status(201)
  res.end()
})

module.exports = router