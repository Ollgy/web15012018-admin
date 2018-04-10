const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const http = require('request');
const config = require('../config');

const apiOptions = {
  server: config.server
};

module.exports.admin = function (req, res) {
  res.render('pages/admin', {
    title: 'Панель администрирования'
  });
};

module.exports.uploadImg = function (req, res) {
  let form = new formidable.IncomingForm();
  let upload = 'public/upload';
  let fileName;  
  if (!fs.existsSync(upload)) {
    fs.mkdirSync(upload);
  }
  form.uploadDir = path.join(process.cwd(), upload);
  form.parse(req, function (err, fields, files) {
    if (err) {
      return res.json({msg: 'Не удалось загрузить картинку', status: 'Error'});
    }
    if (!fields.name) {
      fs.unlink(files.photo.path);
      return res.json({msg: 'Не указано описание картинки!', status: 'Error'});
    }
    if (!fields.tech) {
      fs.unlink(files.photo.path);
      return res.json({msg: 'Не указано описание техник!', status: 'Error'});
    }

    fileName = path.join(upload, files.photo.name);

    fs.rename(files.photo.path, fileName, function (err) {
      if (err) {
        console.log(err);
        fs.unlink(fileName);
        fs.rename(files.photo.path, fileName);
      }
      const pathApi = '/api/imgworks';
      let dir = fileName.substr(fileName.indexOf('\\'));
      const requestOptions = {
        url: apiOptions.server + pathApi,
        method: 'POST',
        json: {
          name: fields.name,
          tech: fields.tech,
          picture: dir
        }
      };

      http(requestOptions, function (error, response, body) {
        if (error) {
          return res.json({msg: 'Картинка не сохранилась в БД ' + error, status: 'Error'});
        }
        res.json({msg: 'Картинка успешно загружена', status: 'Ok'});
      });
    });
    
  })
}