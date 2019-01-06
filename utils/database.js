const path = require('path')
const sqlite3 = require('sqlite3')
const mode = sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE

module.exports = {
  get: (name) => new Promise((resolve, reject) => {
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