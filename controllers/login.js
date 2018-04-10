const mongoose = require('mongoose');
const passport = require('passport');

module.exports.login = function (req, res) {
  // if (req.isAuthenticated()) {
  //   return res.redirect('/admin');
  // }
  res.render('pages/index', {
    title: 'Главная',
    msg: req.query.msg
  });
}

module.exports.auth = function (req, res, next) {
  console.log('Аутентификация')
  passport.authenticate('loginUsers', (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log('Укажите верный пароль!')
      req.flash('message', ' Укажите правильный логин и пароль!');
      return res.redirect('/');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      console.log("Пароль верный")
      
      return res.redirect('/admin');
    });
    // if (req.isAuthenticated()) {
    //   return res.redirect('/admin');
    //  }
  })(req, res, next);
}