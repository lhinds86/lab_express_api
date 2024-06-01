const db = require('../db')
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const movies = [
    {
      title: "Black Panther",
      runtime: 134,
      rating: "PG-13",
      year_released: 2018,
      description: "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war",
      movie_img: "https://www.imdb.com/title/tt1825683/mediaviewer/rm172972800/?ref_=tt_ov_i",
    },
    {
      title: "Iron Man",
      runtime: 126,
      rating: "PG-13",
      year_released: 2008,
      description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      movie_img: "https://www.imdb.com/title/tt0371746/mediaviewer/rm1544850432/?ref_=tt_ov_i",
    },
    {
      title: "The Avengers",
      runtime: 139,
      rating: "PG-13",
      year_released: 2012,
      description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      movie_img: "https://www.imdb.com/title/tt0848228/mediaviewer/rm3955117056/?ref_=tt_ov_i",
    }
  ]
  await Movie.insertMany(movies)
  console.log('Created Movie!')
}

const run = async () => {
  await main()
  db.close()
}

run()