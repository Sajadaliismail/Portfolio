import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { yourName, email, subject, yourMessage } = await request.json();

    // Validate required fields
    if (!yourName || !email || !subject || !yourMessage) {
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
      subject: `${subject} : ${email}`,
      text: `Message from ${yourName}: ${yourMessage}`,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
