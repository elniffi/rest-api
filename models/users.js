const database = require('../utils/database')
const userDatabase = database.get('users')

module.exports = {
  create: async () => {
    let db = await userDatabase

    console.log(db)
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