const User = require('../model/User')

exports.createUser = async (req, res) => {
  const newUser = await User.create(req.body)
  console.log(req.body)

  newUser.save((error) => {
    if (error) {
      res.status(400).send('Unable to save new User to database, something went wrong')
    } else {
      res.status(201).json({
        success: true,
        data: newUser,
        message: 'New User was saved in database correctly'
      })
    }
  })
}

exports.getAllUsers = (req, res) => {
  User.find({}).exec((error, user) => {
    if (error) {
      return res.send(500, error)
    } else {
      res.status(200).json({ user })
    }
  })
}
