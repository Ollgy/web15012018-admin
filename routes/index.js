const express = require('express');
const router = express.Router();

const ctrlWorks = require('../controllers/works');
const ctrlBlog = require('../controllers/blog');
const ctrlLogin = require('../controllers/login');
const ctrlAdmin = require('../controllers/admin');
const ctrlAbout = require('../controllers/about');

var isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  };

router.get('/works', ctrlWorks.works);
router.post('/mail', ctrlWorks.sendEmail);

router.get('/blog', ctrlBlog.blog);

router.get('/', ctrlLogin.login);
router.post('/', ctrlLogin.auth);

router.get('/admin', isAuthenticated,ctrlAdmin.admin);
router.post('/admin/imgworks', isAuthenticated,ctrlAdmin.uploadImg);

router.get('/about', ctrlAbout.about);

module.exports = router;