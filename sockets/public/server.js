import express from 'express'
import http from 'express'
import { Socket, server } from 'socket.io'

const PORT = 3000
const app = express()
const httpServer = http.createServer(app)
app.use(express.urlencoded({extend: true}))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', 'public/views')
app.set('/static', express.static('public'))

const io = new server(hattpServer, {
    cors: {
        origin: '*'
    }
})

io.on('connection', (socket) => {
    console.log('a user connected')

    /*socket.on('message', (msg) => {
        console.log('a user connected')
    })*/
})

app.listen(PORT, () => {
    console.log('server is running on port ${PORT}')
})

//1:38 buscar archivos 
