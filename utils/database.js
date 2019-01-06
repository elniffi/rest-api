const sqlite3 = require('sqlite3')
const mode = sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE

let database = null

module.exports = {
  get: (name) => {
    new sqlite3.Database(
      '../.data/users', 
      OPEN_READWRITE | OPEN_CREATE, 
      error => {
        if (!error) {
          resolve(db)
        } else {
          reject(error)
        }
      }
    )
  }
}