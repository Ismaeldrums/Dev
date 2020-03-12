// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var newsSchema = mongoose.Schema({
    created_at: {
        type: Date,
        default: Date.now
    },
    title: String,
    url: String,
    autor: String,
    points: String,
    story_text: String,
    comment_text :String,
    num_comments : String,
    story_id: Number,
    story_title: String,
    story_url: String,
    parent_id: String,
    created_at_i: String,
    _tags: Array,
    objectID: String,
    _highlightResult: Array
});
// Export Contact model
var News = module.exports = mongoose.model('recentnews', newsSchema);
module.exports.get = function (callback, limit) {
    News.find(callback).limit(limit);
}