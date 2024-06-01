const express = require('express')
const db = require('./db')
const movieControllers = require('./controllers/movieControllers')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'error'))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

app.get('/', (req, res) => res.send('This is our landing page'))

app.get('/movies', movieControllers.getAllMovies)

// app.get('/movies/:id', movieControllers.getMovieById)