const Email = require('email-templates')
const _options = require('./generateTransporter').options

export default function send(options) {
  new Email({
    message: {
      from: options.from || 'no-reply@fulcrongrv.it',
      sender: options.sender || 'FulcronGRV',
      replyTo: options.replyTo,
    },
    transport: _options,
  })
    .send({
      template: options.template,
      message: {
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      },
      locals: options.locals,
    })
    .then(() => console.log('Email sent correctly'))
    .catch((err) => console.error('Error: email was not sent: ', err))
}
