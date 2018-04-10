const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/blog');
const ctrlImgworks = require('../controllers/imgworks');
const ctrlAbout = require('../controllers/about');

router.get('/blog', ctrlBlog.getArticles); // READ
router.post('/blog', ctrlBlog.createArticle); // CREATE
router.put('/blog/:id', ctrlBlog.editArticle); // EDIT
router.delete('/blog/:id', ctrlBlog.deleteArticle); // DELETE

router.get('/about', ctrlAbout.getSkills); // READ
router.post('/about', ctrlAbout.createSkill); // CREATE
router.put('/about/:id', ctrlAbout.editSkill); // EDIT
router.delete('/about/:id', ctrlAbout.deleteSkill); // DELETE

router.get('/imgworks', ctrlImgworks.getImg);
router.post('/imgworks', ctrlImgworks.setImg);

router.get('*', (req, res) => {
  res.status(404).json({msg: 'Not found', err: 404});
})

module.exports = router;