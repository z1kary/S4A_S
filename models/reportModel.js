const mongoose = require('mongoose')

const reportSchema = mongoose.Schema({
  data: {
    type: Object
  }
})

const Report = mongoose.model('Report', reportSchema)

module.exports = Report