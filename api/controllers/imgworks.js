const mongoose = require('mongoose');

module.exports.getImg = function(req, res) {
  const imgworks = {
    name: 'Сайт портфолио',
    tech: 'html,css,javascript',
    picture: '../../assets/img/pages/welcome/photo.jpg'
  }
  const picture = mongoose.model('imgworks');
  
  picture
    .find()
    .then(items => {
      if (!items.length) {
        res
          .status(200)
          .json({images:[imgworks]});
      } else {
        res
          .status(200)
          .json({images: items});
      }
    });
}

module.exports.setImg = function(req, res) {
  const Model = mongoose.model('imgworks');
  // Model.remove({}, err => {
  //   if (err) return res.status(400).json({message: err.message, error: err})
    
    const item = new Model({name: req.body.name, tech: req.body.tech, picture: req.body.picture});
    item
      .save()
      .then(pic => res.status(201).json(pic), e => res.status(400).json({message: e.message, error: e}))
 // });
}