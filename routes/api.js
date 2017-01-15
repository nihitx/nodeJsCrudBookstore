var express = require('express');
var router = express.Router();
var Genre = require('../models/genre');
var Book = require('../models/book');

/* GET genres . */
router.get('/genres', function(req, res, next) {
    Genre.find(function(err , genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

/* post genres . */
router.post('/genres', function(req, res, next) {
    var genre = new Genre(req.body);
    Genre.create(genre, function(err , genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

/* update genres . */
router.put('/genres/:_id', function(req, res, next) {
    var id = req.params._id;
    var genre = req.body;
    var update = {
        name : genre.name
    }
    var options = {new: true};
    Genre.findOneAndUpdate({_id : id}, update , options, function(err , genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

/* delete genre */
router.delete('/genres/:_id', function(req, res, next) {
    var id = req.params._id;
    Genre.remove({_id : id}, function(err , genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

/* GET books. */
router.get('/books', function(req, res, next) {
    Book.find(function(err , books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});


/* GET book. */
router.get('/books/:_id', function(req, res, next) {
    Book.findById(req.params._id , function(err , book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});


/* post book . */
router.post('/books', function(req, res, next) {
    var book = new Book(req.body);
    Book.create(book, function(err , book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

module.exports = router;
