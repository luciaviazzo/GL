const net = require('node:net')

function findAvailablePortd(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        server.close(() => {
          findAvailablePort(0).then(resolve).catch(reject)
        })
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
