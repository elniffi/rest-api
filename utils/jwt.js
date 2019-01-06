const jwt = require('jsonwebtoken');

const {
  jwt: {
    secret,
    ttl
  }
} = require('../config.json')

module.exports = {
  create: username => new Promise((resolve, reject) => jwt.sign({
    username
  }, secret, { expiresIn: ttl }, (error, token) => {
    if (error) {
      reject(error)
    } else {
      resolve(token)
    }
  })),
  verify: token => new Promise((resolve, reject) => {
    jwt.verify(token, secret, function(error, decoded) {
      if (error) {
        reject(error)
      } else {
        resolve(decoded)
      }
    });
  })
}