const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const verifyToken = require('./middlewares/verifyToken');
const user = require('./user');
const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
const passportLocal = require('passport-local');
const LocalStrategy = require('passport-local').Strategy;
const passportJwt = require('passport-jwt');
let JwtStrategy = passportJwt.Strategy,
  ExtractJwt = passportJwt.ExtractJwt;

app.get('/api', (req, res) => {
  res.json({ message: ' Welcome to the API' });
});


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

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
