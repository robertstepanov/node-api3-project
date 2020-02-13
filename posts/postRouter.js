const express = require('express');

const Posts = require('./postDb');

const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  Posts.get(req.query)
  .then(post => {
    res.status(200).json(post);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Error getting posts' })
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
  Posts.getById(req.params.id)
  .then(post => {
    res.status(200).json(post);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'No posts by that user' })
  })
});

router.delete('/:id', (req, res) => {
  // do your magic!
  Posts.remove(req.params.id)
  .then(removed => {
    res.status(200).json(removed);
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Error removing post' })
  })
});

router.put('/:id', (req, res) => {
  // do your magic!
  const { id } = req.params;
  const changes = req.body;
  Posts.update(id, changes)
  .then(post => {
    res.status(200).json(post)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Error updating the post' })
  })
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
