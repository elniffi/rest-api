const express = require('express')
const router = express.Router()

/**
 * Validate a given token and return meta information 
 * about the user attached to it
 */
router.post('/', (req, res) => {
  res.status(201)
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