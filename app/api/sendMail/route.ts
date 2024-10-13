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
        user: process.env.NEXT_PUBLIC_GMAIL_USER,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
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

   
  `,
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; padding: 20px; max-width: 600px; margin: auto; background-color: #f4f4f4; border-radius: 10px; border: 1px solid #ddd;">
      <div style="background-color: #4CAF50; color: white; padding: 15px; border-radius: 10px 10px 0 0;">
        <h2 style="margin: 0;">New Message: ${subject}</h2>
      </div>
      
      <div style="padding: 20px; background-color: white; border-radius: 0 0 10px 10px;">
        <p style="font-size: 16px;"><strong>From:</strong> ${name} (<a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a>)</p>
        <p style="font-size: 16px;"><strong>Subject:</strong> ${subject}</p>
        <p style="font-size: 16px; margin-top: 20px;"><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd; font-size: 15px;">
          ${content}
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <a href="mailto:${email}" style="display: inline-block; padding: 12px 25px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; font-size: 16px;">Reply to ${name}</a>
        </div>
        
        <br>
      </div>
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
