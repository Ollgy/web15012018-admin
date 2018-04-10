const http = require('request');
const config = require('../config');

const apiOptions = {
  server: config.server
};

module.exports.blog = function (req, res) {
  const pathAPI = '/api/blog';
  const requestOptions = {
    url: apiOptions.server + pathAPI,
    method: 'GET',
    json: {}
  };
  const sendObj = {
    title: 'Мой блог'
  };
  
  http(requestOptions, function (error, response, body) {
    if (error) {
      console.log(error);
    }
    res.render('pages/blog', Object.assign({}, sendObj, body));
  });
}