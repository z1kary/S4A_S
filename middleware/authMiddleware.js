const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')

module.exports.fetchJwt = (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, process.env.TOKEN, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null
        res.status(555).json({ $error: 'invalid_token' })
      } else {
        let user = await UserModel.findById(decodedToken.id).select('-password')
        res.locals.user = user
        next()
      }
    })
  } else {
    res.locals.user = null
    next()
  }
  
}

// module.exports.checkAuth = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     //console.log('CHECK SUCCESSFUL: Your token: ' + token);
//     const decoded = jwt.verify(token, 'my_secret_key');
//     req.userData = decoded;
//     next();
//   } catch (error) {
//     // 401: unauthenticated
//     return res.status(401).json({
//       message: 'Auth failed'
//     });
//   }
// }