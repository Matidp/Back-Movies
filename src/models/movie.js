
const { Schema, model } = require('mongoose');

const ObjectId = Schema.ObjectId;
const movieSchema = new Schema({
    id: {type: ObjectId, required:true},
    title: {type: String, required:true},
    year: {type: String, required:true},
    cast: [{type: String, required:true}],
    poster: {type: String, required:false},
    plot: {type: String, required:true},
    fullplot: {type: String, required:false},
    directors: [{type: String, required:true}],
    type: {type: String, required:false},
    lastUpdated: {type: Date, required:false},
    imdb: {
        rating: Number,
        votes: Number,
        id: Number
    },
    tomatoes: {
        viewer: {
            rating: Number,
            numReviews: Number,
            meter: Number
        },
        critic: {
            rating: Number,
            numReviews: Number,
            meter: Number
        },
    },
    countries: [{type: String, required:true}],
    rated: {type: String, required:false},
    genres: [{type: String, required:true}]
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Movie', movieSchema);

