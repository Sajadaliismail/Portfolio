import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, content } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !content) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const MAIL_SETTINGS = {
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    };

    const transporter = nodemailer.createTransport(MAIL_SETTINGS);

    await transporter.sendMail({
      from: MAIL_SETTINGS.auth.user,
      to: "sajadaliismail@gmail.com",
      subject: `New Message: ${subject}`,
      text: `
    You have received a new message.

    From: ${name} (${email})

    Subject: ${subject}

    Message:
    ${content}

    Best regards,
    Your Website
  `,
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #4CAF50;">New Message: ${subject}</h2>
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px; border: 1px solid #ddd;">
        ${content}
      </p>
      <br>
      <p>Best regards,<br>Your Website</p>
    </div>
  `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    // console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
