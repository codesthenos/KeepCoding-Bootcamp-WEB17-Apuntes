import nodemailer from 'nodemailer'

export async function createTransport () {
  const options = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "vince.christiansen79@ethereal.email",
      pass: "vn9GXcRFGnjxr16F6F",
    }
  }

  return nodemailer.createTransport(options)
}

export function generatePreviewURL (sendResult) {
  return nodemailer.getTestMessageUrl(sendResult)
}