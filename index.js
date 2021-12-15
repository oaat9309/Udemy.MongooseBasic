const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
    console.log('connection open')
    })
    .catch(err => {
    console.log('error appeared!')
    console.log(err)
    })

// making new schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

// making a new model
const Movie = mongoose.model('Movie', movieSchema)

/*const Amadeus = new Movie(
    {title: 'Amadeus',
    year: 1986,
    score: 9.2,
    rating: 'R'
}) */

/*Movie.insertMany([
    {title: 'Parasite', year: 2019, score: 9.3, rating: 'R'},
    {title: 'Uncut Jems', year: 2019, score: 9.0, rating: 'R'},
    {title: 'Last Night in Soho', year: 2021, score: 8.1, rating: 'PG'},
    {title: 'Fight Club', year: 1997, score: 9.4, rating: 'R'},
    {title: 'There Will Be Blood', year: 2009, score: 9.2, rating: 'PG-13'}
])
    .then(data => {
        console.log('It worked!')
        console.log(data)
    }) */