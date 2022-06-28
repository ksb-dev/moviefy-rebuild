require('dotenv').config()
require('express-async-errors')
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())

// connectDB
const connectDB = require('./db/connect')

// Authentication middleware
const authenticateUser = require('./middleware/authentication')

// Routers
const authRouter = require('./routes/auth')
const wishListRouter = require('./routes/wishlist')

// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())
// extra packages

// routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/wishlist', authenticateUser, wishListRouter)

/*app.use(express.static(path.join(__dirname, '/client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const __dirname = path.resolve()*/

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
