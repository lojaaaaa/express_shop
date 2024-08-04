const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1] // Bearer <token>
    if (!token) {
      res.status(401).json({ message: 'Пользователь не авторизован'})
    }
    const decode = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decode
    next()
  } catch (error) {
    res.status(401).json({ message: 'Пользователь не авторизован'})
  }
}