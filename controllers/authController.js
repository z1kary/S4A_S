const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const maxAge = 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN, {
    expiresIn: maxAge
  })
}

module.exports.signup = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await UserModel.create({ username, password })
    const userN = await UserModel.findById(user._id).select('-password')
    res.status(200).json({ success: true, user: userN })
  } catch (err) {
    console.log(err);
  }
}

module.exports.signin = async (req, res) => {
  const { username, password } = req.body
  const user = await UserModel.login(username, password)
  console.log(user._id);
  const token = createToken(user._id)
  res.cookie('jwt', token, { httpOnly: true, maxAge })
  // res.status(200).json({ success: true, user: user })
  const nUser = await UserModel.findById(user._id).select('-password')
  
  res.send(nUser)
}

module.exports.signout = async (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 })
  res.redirect('/')
}