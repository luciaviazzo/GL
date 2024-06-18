const http = require('node:http') //protocolo HTTP
const { findAvailablePort } = require('./free-port')

//Importo mi json (arreglo con obras)
const dittoJSON = require('./pokemon/ditto.json') 

console.log(process.env)

const desiredPort = process.env.PORT ?? 3000


//Procesar la request
const processRequest = (req, res) => {
  //De cada request sacamos method y urlç
  const {method, url} = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto': //entro a la carpeta de json
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON)) //lo transforma en string
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8') //html
          return res.end('<h1>404</h1>') //error
      }

    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''

          // escuchar el evento data
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            // llamar a una base de datos para guardar la info
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })

            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })

          break
        }
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          return res.end('404 Not Found')
      }
  }
}

//Crear el servidor
const server = http.createServer(processRequest)

//Encuentra el puerto y escuha la request
findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})