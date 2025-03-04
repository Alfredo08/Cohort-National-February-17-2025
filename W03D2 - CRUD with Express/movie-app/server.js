const express = require('express');
const {uid} = require('uid');
const app = express();

const movieList = [
    {
        id: '1',
        title: 'The Godfather',
        director: 'Francis Copolla'
    },
    {
        id: '2',
        title: 'Lost in translation',
        director: 'Sofia Copolla'
    },
    {
        id: '3',
        title: 'Finding Nemo',
        director: 'Andrew Stanton'
    }
];

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}));

// http://localhost:8080/movies
app.get('/movies', (req, res) => {
    const templateVars = {
        movieList
    };

    res.render('index', templateVars);
});

// http://localhost:8080/movie/:id
app.get('/movie/:id', (req, res) => {
    const movie = movieList.find(movie => movie.id === req.params.id);
    const templateVars = {
        issue: false
    }
    if(!movie){
        templateVars.issue = true;
    }
    else{
        templateVars.movie = movie;
    }

    res.render("movie-detail", templateVars);
});
// http://localhost:8080/movie/delete/:id
app.get('/movie/delete/:id', (req, res) => {
    const movieIndex = movieList.findIndex(movie => movie.id === req.params.id);
    // splice - adds or removes
    // 1st param: index to start at
    // 2nd param: How many to remove?
    // 3rd param: New elements to add
    movieList.splice(movieIndex, 1);
    res.redirect('/movies');
});

// http://localhost:8080/new-movie
app.get('/new-movie', (req, res) => {
    res.render('new-movie');
})

// http://localhost:8080/add-movie
app.post('/add-movie', (req, res) => {
    const newMovie = {
        title: req.body.title,
        director: req.body.director,
        id: uid(5)
    }
    movieList.push(newMovie);
    res.redirect('/movies');
});

// http://localhost:8080/update-movie/:id
app.post('/update-movie/:id', (req, res) => {
    const movieIndex = movieList.findIndex(movie => movie.id === req.params.id);
    movieList[movieIndex] = {
        id: req.params.id,
        title: req.body.title,
        director: req.body.director
    }
    res.redirect('/movies');
});

// http://localhost:8080/movie/edit/:id
app.get('/movie/edit/:id', (req, res) => {
    const movie = movieList.find(movie => movie.id === req.params.id);
    const templateVars = {
        movie
    };
    res.render('edit-movie', templateVars);
});

app.listen(8080, () => {
    console.log('Server running in port 8080!');
});