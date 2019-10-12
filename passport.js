const express = require('express');
const app = express();
const user = require('./user');
const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
const passportLocal = require('passport-local');
/* const LocalStrategy = require('passport-local').Strategy; */
const passportJwt = require('passport-jwt');
let JwtStrategy = passportJwt.Strategy,
  ExtractJwt = passportJwt.ExtractJwt;

module.exports = function (passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.JWT_SECRET;
  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    console.log(jwt_payload);
    console.log(done);
  }))
}


/* (new LocalStrategy({
  usernameField: meli,
  passwordField: meli123,
  session: false
}, (username, password, done) => {
  //callback de verificación
})) */