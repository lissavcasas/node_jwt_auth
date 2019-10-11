/* const express = require('express');
const router = express.Router();
const user = require('../../user');
const dotenv = require('dotenv');
dotenv.config();

router.post('/api/login', (req, res) => {
  jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '30s' }, (err, token) => {
    res.json({ token })
  }); //async, send it along the payload (3 parametros)
});

module.exports = router; */