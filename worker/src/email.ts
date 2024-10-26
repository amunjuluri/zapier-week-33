import nodemailer from "nodemailer";

export async function sendEmail(to: string, text: string) {
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_ENDPOINT,
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  let mailOptions = {
    from: '"Anand" <munjulurianand@gmail.com>', // sender address
    to: "mm3901@srmist.edu.in", // list of receivers
    subject: "HELLO FROM FLOWBOX", // Subject line
    text: text, // plain text body
};

// Send email
try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
} catch (error) {
    console.error('Error sending email:', error);
}
}