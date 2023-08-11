const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    "i": Object,
    "id": String,
    "title": String,
    "type": String,
    "typeid": String,
    "rank": Number,
    "starring": String,
    "year": Number,
});

const Movies = mongoose.model("Movies", movieSchema);

module.exports = Movies;