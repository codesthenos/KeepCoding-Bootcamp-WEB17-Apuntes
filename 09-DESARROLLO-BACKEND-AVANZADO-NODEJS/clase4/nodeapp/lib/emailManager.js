import nodemailer from 'nodemailer'

export async function createTransport () {
  const options = {
    host: process.env.EMAIL_SERVICE_HOST,
    port: process.env.EMAIL_SERVICE_PORT,
    secure: Boolean(process.env.EMAIL_SERVICE_SECURE), // true for port 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVICE_USER,
      pass: process.env.EMAIL_SERVICE_PASSWORD,
    }
  }

  return nodemailer.createTransport(options)
}

export function generatePreviewURL (sendResult) {
  return nodemailer.getTestMessageUrl(sendResult)
}