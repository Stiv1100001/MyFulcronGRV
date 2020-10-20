const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  sendmail: true,
  newline: 'unix',
})

export default transporter
