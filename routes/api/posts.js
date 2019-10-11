/* const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyToken = require('../../middlewares/verifyToken');
const dotenv = require('dotenv');
dotenv.config();


// Get all members
router.get('/', (req, res) => res.json(user));


// Create a route that I want to protect. Add middleware (verifytoken)
router.post('/api/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => { //authData: user and email
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post created',
        authData
      });
    }
  });
});

module.exports = router; */