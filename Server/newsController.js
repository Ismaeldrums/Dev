// contactController.js
// Import news model
News = require('./newsModel');
// Handle index actions
exports.index = function (req, res) {
    News.get(function (err, news) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "news retrieved successfully",
            data: news
        });
    });
};
// Handle create news actions
exports.new = function (req, res) {
    var news = new News();
    news.created_at = req.body.created_at;
    news.comment_text = req.body.comment_text;
    news.story_title = req.body.story_title;
    news.autor = req.body.autor;
    news.story_id = req.body.story_id;
// save the news and check for errors
    news.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New news created!',
                data: news
            });
    });
};
// Handle view news info
exports.view = function (req, res) {
    News.findById(req.params.story_id, function (err, news) {
        if (err)
            res.send(err);
        res.json({
            message: 'News details loading..',
            data: news
        });
    });
};
// Handle update news info
exports.update = function (req, res) {
    News.findById(req.params.story_id, function (err, news) {
        if (err)
            res.send(err);
// save the news and check for errors
        news.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'News Info updated',
                data: news
            });
        });
    });
};
// Handle delete news
exports.delete = function (req, res) {
    News.remove({
        story_id: req.params.story_id
    }, function (err, news) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'News deleted'
        });
    });
};