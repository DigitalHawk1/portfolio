(function () {
  'use strict'

  angular.module('app')

  var nodemailer = require('nodemailer')

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'antanaslstanys@gmail.com',
      pass: 'Antux159KarolSta'
    }
  });

  var mailOptions = {
    from: 'antanaslstanys@gmail.com',
    to: 'antux124@gmail.com',
    subject: 'Test',
    text: 'Testas pavyko'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})()
