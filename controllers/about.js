const http = require('request');
const config = require('../config');

const apiOptions = {
  server: config.server
};

module.exports.about = function (req, res) {
  const pathAPI = '/api/about';
  const requestOptions = {
    url: apiOptions.server + pathAPI,
    method: 'GET',
    json: {}
  };

  const sendObj = {
    title: 'Обо мне'
  };
  
  http(requestOptions, function (error, response, body) {
    if (error) {
      console.log(error);
    }
    res.render('pages/about', Object.assign({}, sendObj, body));
  });
}