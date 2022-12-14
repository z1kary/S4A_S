const mongoose = require('mongoose')

const mangaSchema = mongoose.Schema({
  category: {
    type: String
  },
  format: {
    type: Array
  },
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
  seasons: {
    type: Object
  },
  seasonsData: {
    type: Object
  }
})

const Manga = mongoose.model('Manga', mangaSchema)

module.exports = Manga