const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash,
        firstName: req.body.firstName
      });
      user.save()
        .then(result => {
          res.status(201).json({
            message: 'User created!',
            result: result
          })
        })
        .catch(err => {
          res.status(500).json({
            error: err
          })
        })
    })
});

router.post('/login', (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'Auth failed!'
        })
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: 'Auth failed!'
        })
      }
      const token = jwt.sign({email: fetchedUser.email, userId: fetchedUser._id}, `${process.env.JWT_SECRET}`, {expiresIn: '1h'});
      res.status(200).json({
        token: token,
        firstName: fetchedUser.firstName,
        expiresIn: 3600
      })
    })
    .catch(err => {
      return res.status(401).json({
        error: err
      })
    })
})

module.exports = router;
