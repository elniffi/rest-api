const {
  verify
} = require('../utils/jwt')

module.exports = async (req, res, next) => {
  const token = req.get('x-user-authentication')

  if (typeof token !== 'string' || !token) {
    res.sendStatus(400)
    res.end()
  } else {
    try {
      const decoded = await verify(token)
      req.username = decoded.username
      next()
    } catch (error) {
      res.sendStatus(401)
      res.end()
    }
  }
}