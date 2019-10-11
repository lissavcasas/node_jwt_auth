const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const verifyToken = require('./middlewares/verifyToken');
const dotenv = require('dotenv');
dotenv.config();

/* const passport = require('passport');
const passportLocal = require('passport-local');
const LocalStrategy = require('passport-local').Strategy;
const passportJwt = require('passport-jwt');
let JwtStrategy = passportJwt.Strategy,
  ExtractJwt = passportJwt.ExtractJwt; */

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/api', (req, res) => {
  res.json({ message: ' Welcome to the API' });
});

// Create a route that I want to protect. Add middleware (verifytoken)
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

  jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '30s' }, (err, token) => {
    res.json({ token })
  }); //async, send it along the payload (3 parametros)
});



/* passport.use(new LocalStrategy({
  usernameField: "username",
  passwordField: "password",
  session: false
}, (username, password, done) => {
  //callback de verificación
})); */

/*  */