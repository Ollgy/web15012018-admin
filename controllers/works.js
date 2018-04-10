const nodemailer = require('nodemailer');
const config = require('../config.json');
const http = require('request');

const apiOptions = {
  server: config.server
};

module.exports.works = function (req, res) {
  const pathApi = '/api/imgworks';
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: "GET",
    json: {}
  };
  const sendObj = {
    title: 'Мои работы',
    msg: req.query.msg
  };
  http(requestOptions, function (error, response, body) {
    console.log(body);
    res.render('pages/works', Object.assign({}, sendObj, body));
  })
}

module.exports.sendEmail = function(req, res) {
  console.log('Письмо!!!')
  // требуем наличия имени, обратной почты и текста
  if (!req.body.name || !req.body.email || !req.body.comment) {
    //если что-либо не указано - сообщаем об этом
    return res.redirect('/?msg=Все поля нужно заполнить!');
  }
  // инициализируем модуль для отправки писем и указываем данные из конфига
  const transporter = nodemailer.createTransport(config.mail.smtp);
  const mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text: req
      .body
      .comment
      .trim()
      .slice(0, 500) + `\n Отправлено с: <${req.body.email}>`
  };
  // отправляем почту
  transporter.sendMail(mailOptions, function (error, info) {
    //если есть ошибки при отправке - сообщаем об этом
    if (error) {
      return res.redirect('/?msg=При отправке письма произошла ошибка: ' + error);
    }
    return res.redirect('/?msg=Письмо отправлено ');
    //console.log(info)
  });
}