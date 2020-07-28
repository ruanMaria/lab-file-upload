const express = require('express');
const router = express.Router();
const Post = require('../models/Post.model');
const User = require('../models/User.model');

/* GET home page */
router.get('/', (req, res) => {
  Post.find()
  .populate('creatorId')
  .populate('comments')
  .populate({
    path: 'comments',
    populate: {
      path: 'authorId',
      model: 'User'
    }
  })
  .then(post => {
    res.render('index', {
      post,
      title: 'IronTumblr'
    });
});
});

module.exports = router;
