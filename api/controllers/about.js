const mongoose = require('mongoose');
const defaultJSON = require('../../data.json');

module.exports.getSkills = function (req, res) {
  const skills = mongoose.model('skills');

  skills
    .find()
    .then(items => {
      if (!items.length) {
        res
          .status(200)
          .json(defaultJSON);
      } else {
        res
          .status(200)
          .json({skills: items});
      }
    });
};

module.exports.createSkill = function (req, res) {
  // создаем новую запись блога и передаем в нее поля из формы
  const Model = mongoose.model('skills');
  let item = new Model({
    id: req.body.id,
    name: req.body.name,
    percents: req.body.percents,
    type: req.body.type
  });
  console.log('from create skill');
  // сохраняем запись в базе
  item
    .save()
    .then(item => {
      return res
        .status(201)
        .json({status: 'Запись успешно добавлена'});
    }, err => {
      // обрабатываем  и отправляем
      res
        .status(404)
        .json({
          status: 'При добавление записи произошла ошибка: ' + err
        });
    });  
};

module.exports.editSkill = function (req, res) {
  const id = req.params.id;

  let data = {
    id: req.body.id,
    name: req.body.name,
    percents: req.body.percents,
    type: req.body.type
  };

  const Model = mongoose.model('skills');

  Model
    .findByIdAndUpdate(id, {$set: data})
    .then((item) => {
      if (item) {
        res
          .status(200)
          .json({status: 'Запись успешно обновлена'});
      } else {
        res
          .status(404)
          .json({status: 'Запись в БД не обнаружена'});
      }
    })
    .catch((err) => {
      res
        .status(404)
        .json({
          status: 'При обновлении записи произошла ошибка: ' + err
        });
    });
};

module.exports.deleteSkill = function (req, res) {
  const id = req.params.id;
  const Model = mongoose.model('skills');

  Model
    .findByIdAndRemove(id)
    .then((item) => {
      if (item) {
        res.status(200).json({status: 'Запись успешно удалена'});
      } else {
        res.status(404).json({status: 'Запись в БД не обнаружена'});
      }
    }, (err) => {
      res.status(404).json({
        status: 'При удалении записи произошла ошибка: ' + err
      });
    });
}