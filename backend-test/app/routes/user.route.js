const express = require('express');
const userCtrl = require('../controllers/user.controller');

const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });

const router = express.Router()

router.route('/api/user/getData')
  .post(userCtrl.getData)

module.exports = router ;


