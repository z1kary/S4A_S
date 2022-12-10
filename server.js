const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config({ path: './config/.env' })
require('./config/db')
const { fetchJwt } = require('./middleware/authMiddleware')
const path = require('path')

const app = express()

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}

app.use(cors(corsOptions))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/jwtid', fetchJwt, (req, res) => {
  res.status(200).send(res.locals.user)
})

app.use('/api', require('./routes/index.routes'))

app.listen(process.env.PORT, () => {
  console.log(`Listening on port : ${process.env.PORT}`)
})