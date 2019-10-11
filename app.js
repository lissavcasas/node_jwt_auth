const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: ' Welcome to the API' });
});

//create a route that I ewant to protect. Add middleware (verifytoken)
app.post('/api/posts', verifyToken, (req, res) => {
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

app.post('/api/login', (req, res) => {
  //Mock user
  const user = {
    id: 1,
    username: 'meli',
    email: 'meli@gmail.com'
  }

  jwt.sign({ user }, 'secretKey', { expiresIn: '30s' }, (err, token) => {
    res.json({ token })
  }); //async, send it along the payload (3 parametros)
});

//Verify token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Ckeck if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    //Split at the space
    const bearer = bearerHeader.split(' ');
    //Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerHeader;
    //Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
};


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});