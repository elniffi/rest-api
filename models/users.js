const databaseHelper = require('../utils/database')
const tableDefinition = 'CREATE TABLE users (email	TEXT NOT NULL, hashedPassword	TEXT NOT NULL, PRIMARY KEY(email));'
const db = database.get('users', tableDefinition)

module.exports = {
  create: async () => {

  },
  read: async () => {

  },
  update: async () => {

  },
  delete: async () => {

  },
  verifyCredentials: async (username, password) => {
    //TODO: Implement user database
    return true
  }
}