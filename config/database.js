const mongoose = require('mongoose')

const MONGO_HOSTNAME = '127.0.0.1'
const MONGO_PORT = '27017'
const MONGO_DB = 'ibmSetups'

const mongoUrl = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`

const connectDB = async () => {
  await mongoose.connect(mongoUrl)
    .then(() => {
      console.log(`Conectado ao Banco MONGODB!`)

      // const connection = mongoose.connection

      // connection.on('error', console.error.bind(console, 'connection error: '))
      // connection.once('open', async () => {
      //   const collection = connection.db.collections('mongoSetup')
      // })
    })
    .catch((error) => console.log(error))
}

module.exports = connectDB


