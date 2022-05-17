The Nodemailer module can be downloaded and installed using npm : npm install nodemailer --save

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anhhung123anhhung123@gmail.com',
    pass: '********'
  }
});

var mailOptions = {
  from: 'anhhung123anhhung123@gmail.com',
  to: 'nguyenthanhkhanhdtu@gmail.com,boss.dx.kingkurri@gmail.com,minhthong.tao96@gmail.com',
  subject: 'HAKER',
  text: 'Xin chào! Tôi là hacker. Hãy đưa tiền cho tôi'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
