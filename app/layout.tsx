import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sajad Ali Ismail | Best MERN Stack Developer",
  description:
    "MERN Stack developer specializing in building efficient web applications and e-commerce solutions.",
  keywords:
    "MERN Stack Developer, E-commerce Developer, Freelance Developer, React, Node.js, Express.js, MongoDB",
  authors: [{ name: "Sajad Ali Ismail" }],
  openGraph: {
    title: "Sajad Ali Ismail | MERN Stack Developer",
    description:
      "Explore my portfolio showcasing my work as a MERN stack developer.",
    url: "https://sajadaliismail.live",
    type: "website",
    siteName: "Sajad Ali Ismail Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://sajadaliismail.live/Sajad.jpg",
        alt: "Sajad Ali Ismail Portfolio Image",
        width: 600,
        height: 310,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajad Ali Ismail | Best MERN Stack Developer",
    description:
      "MERN Stack developer specializing in building efficient web applications and e-commerce solutions.",
    images: ["https://sajadaliismail.live/Sajad.jpg"],
    site: "@sajadaliismail",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/dev.svg" type="image/x-icon" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
