const mongoose = require('mongoose')

const filmSchema = mongoose.Schema({
  picture: {
    type: String
  },
  date: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  videoUrl: {
    type: String
  },
  thumbnail: {
    type: String
  }
})

const Film = mongoose.model('Film', filmSchema)

module.exports = Film