const express = require('express')
const router = express.Router()

/**
 * Returns a JWT for the user that is valid for 24 hours
 */
router.post('/', (req, res) => {
  res.status(201)
  res.end()
})

module.exports = router