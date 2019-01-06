const express = require('express')
const router = express.Router()

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
router.get('/:id', (req, res) => {
  res.status(200)
  res.end()
})

/**
 * Update information regarding a specific user
 */
router.put('/:id', (req, res) => {
  res.status(200)
  res.end()
})

/**
 * Delete a specific user
 */
router.delete('/:id', (req, res) => {
  res.status(200)
  res.end()
})

module.exports = router