const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.seu88.mongodb.net/s4l',)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err))