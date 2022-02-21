const express = require('express');
const userCtrl = require('../controllers/user.controller');

const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });

const router = express.Router()

router.route('/api/user/login')
  .post(userCtrl.login)

router.route('/api/user/register')
  .post(userCtrl.register)

router.route('/api/user/list')
  .post(auth, userCtrl.userList)

router.route('/api/message/list')
  .post(auth, userCtrl.messageList)

module.exports = router ;


