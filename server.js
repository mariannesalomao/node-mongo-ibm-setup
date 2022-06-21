require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const connectDB = require('./config/database')

const app = express()
app.use(express.json())

connectDB().then(() => console.log(`Calling Mongo on server`))

const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log(`Server running on port: ${PORT}`)

// models
// const User = require("./models/User");

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo a API!" })
})
