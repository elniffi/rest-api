const express = require('express')
const router = express.Router()

const authenticationMiddleware = require('../middlewares/authentication')
const usersModel = require('../models/users')

/**
 * Create a new user
 */
router.post('/', (req, res) => {
  res.status(201)
  res.end()
})

/**
 * Get information about a specific user
 */
router.get('/', [authenticationMiddleware], (req, res) => {
  res.status(200)
  res.json({
    username: req.username
  })
  res.end()
})

/**
 * Update information regarding a specific user
 */
router.put('/', (req, res) => {
  res.status(200)
  res.end()
})

/**
 * Delete a specific user
 */
router.delete('/', (req, res) => {
  res.status(200)
  res.end()
})

module.exports = router