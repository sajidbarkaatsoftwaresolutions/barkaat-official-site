"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formdata: FormData) {
  const name = formdata.get("name") as string;
  const email = formdata.get("email") as string;
  const subject = formdata.get("subject") as string;
  const message = formdata.get("message") as string;

  //   console.log(name, email, subject, message)

  if (!name || !email || !subject || !message) {
    throw new Error("Missing required fields.");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Barkaat Software Solutions" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: `New contact form submission from ${name}`,
    html: `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });
}
