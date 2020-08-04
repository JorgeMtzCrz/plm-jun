const passport = require('passport')
const localStrategy = require('passport-local').localStrategy
const User = require('../models/User')

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

module.exports = passport