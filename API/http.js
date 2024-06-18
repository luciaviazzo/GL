const http = require('node:http') // protocolo HTTP
const { findAvailablePort } = require('./free-port');

console.log(process.env)

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((_req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})