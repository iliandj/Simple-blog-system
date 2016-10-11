let http = require('http')
let handlers = require('./handlers/handlers')

let port = process.env.port || 9876

http
  .createServer((req, res) => {
    for (let handler in handlers) {
      let next = handler(req, res)
      if (!next) {
        break
      }
    }
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
