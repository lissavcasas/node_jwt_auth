const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: ' Welcome to the API' });
});

//create a route that I ewant to protect. Add middleware (verifytoken)
app.post('/api/posts', verifyToken, (req, res) => {
  res.json({ message: 'Post created' })
});

app.post('/api/login', (req, res) => {
  //Mock user
  const user = {
    id: 1,
    username: 'meli',
    email: 'meli@gmail.com'
  }

  jwt.sign({ user }, 'secretKey', (err, token) => {
    res.json({ token })
  }); //async, send it along the payload (3 parametros)
});

// Format of token
//Authorization: Bearer<access_token>

//Verify token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Ckeck if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    return 'hola'
  } else {
    // Forbidden
    res.sendStatus(403);
  }
};


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});