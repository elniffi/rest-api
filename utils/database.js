const path = require('path')
const sqlite3 = require('sqlite3')
const mode = sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE

module.exports = {
  init: async (database, tableName, definition) => {
    // get all definitions
    // check if defined
      // if not create it
      // SELECT name FROM sqlite_master WHERE type='table' AND name='users';
  },
  get: (name) => new Promise(async (resolve, reject) => {
    const database = new sqlite3.Database(
      path.join(__dirname, `../.data/${name}.sqlite3`),
      mode, 
      error => {
        if (!error) {
          resolve(database)
        } else {
          reject(error)
        }
      }
    )
  })
}