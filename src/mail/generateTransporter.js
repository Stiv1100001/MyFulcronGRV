const nodemailer = require('nodemailer')

const options = {
  host: process.env.SMTP_SERVER || 'pro1.mail.ovh.net',
  port: process.env.SMTP_PORT || 587,
  auth: {
    user: process.env.SMTP_USER || 'info@fulcrongrv.it',
    pass: process.env.SMTP_PASS || 'F_2019_in',
  },
  tls: {
    secure: true,
    requireTLS: true,
  },
}

const transporter = nodemailer.createTransport(options)

//export default transporter

module.export = {
  transporter,
  options,
}
