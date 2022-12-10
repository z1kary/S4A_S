const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
})

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username })
  if (user) {
    const auth = await bcrypt.compare(password, user.password)
    if (auth) {
      return await this.findById(user._id).select('-password')
    } else {
      return 'invalid_password'
    }  
  } else {
    return 'invalid_username'
  }
}

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel