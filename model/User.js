const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [ true, 'Please add a name' ]
  },
  email: {
    type: String,
    required: [ true, 'Please add an email' ],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  role: {
    type: String,
    enum: [ 'admin', 'user', 'edit', 'read'],
    default: 'user'
  },
  password: {
    type: String,
    required: [ true, 'Please add a password' ],
    minlength: 6,
    select: false
  },
  // resetPasswordToken: String,
  // resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

/**
 * Encrypt password using Bcrypt
 */

// UserSchema.pre('save', async (next) => {
//   if (!this.isModified('password')) {
//     next()
//   }
//
//   const salt = await bcrypt.genSalt(10)
//   this.password = await bcrypt.hash(this.password, salt)
// })

/**
 * Sign with JWT
 */

// UserSchema.methods.getSignedJwtToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE
//   })
// }

/**
 * Match password entered by user to hashed password in database
 */

// UserSchema.methods.matchPassword = async function(enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password)
// }

/**
 * Generate and hash password token
 */

// UserSchema.methods.getResetPasswordToken = function() {
//
//   const resetToken = crypto.randomBytes(20).toString('hex')
//
//   this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')
//
//   this.resetPasswordExpire = Date.now() + 10 * 60 * 1000
//
//   return resetToken
// }

module.exports = mongoose.model('NodeIBMSetupUSER', UserSchema)

