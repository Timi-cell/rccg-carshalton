const nodemailer = require("nodemailer");
const sendEmail = async (subject, msg, send_to, send_from, reply_to) => {
  // Create Email Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  // Options for sending email

  const options = {
    from: send_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: msg,
  };

  //  Send Email
  await new Promise((resolve, reject) => {
    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
};

module.exports = sendEmail;

