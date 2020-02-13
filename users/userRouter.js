const express = require("express");

const Users = require("./userDb");

const router = express.Router();

router.post("/", (req, res) => {
  // do your magic!
  Users.insert(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error adding user" });
    });
});

router.post("/:id/posts", (req, res) => {
  // do your magic!
  const { id } = req.params;
  const post = { ...req.body, post_id: id };

  Users.insert(post)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error adding user" });
    });
});

router.get("/", (req, res) => {
  // do your magic!
  Users.get(req.query)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error retrieving users" });
    });
});

router.get("/:id", validateUserId, (req, res) => {
  // do your magic!
  Users.getById(req.params.id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "No user with that ID" });
    });
});

router.get("/:id/posts", (req, res) => {
  // do your magic!
  Users.getUserPosts(req.params.id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "No user with that ID" });
    });
});

router.delete("/:id", validateUserId, (req, res) => {
  // do your magic!
  Users.remove(req.params.id)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error removing user" });
    });
});

router.put("/:id", validateUserId, (req, res) => {
  // do your magic!
  const { id } = req.params;
  const changes = req.body;
  Users.update(id, changes)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error updating the user" });
    });
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  const { id } = req.params;
  Users.getById(id)
    .then(user => {
      if (!user) {
        res.status(400).json({ message: "Invalid user ID" });
      } else {
        req.user = user;
        console.log(req.user);

        next();
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Could not find user" });
    });
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
