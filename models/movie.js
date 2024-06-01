const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Movie = new Schema(
  {
    title: { type: String, required: true },
    runtime: { type: Number, required: true },
    rating: { type: String, required: true },
    year_released: { type: Number, required: true },
    description: { type: String, required: true },
    movie_img: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('movies', Movie)