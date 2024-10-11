import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.resolve(".", "public", "Sajad Ali Ismail.pdf");
  const fileExists = fs.existsSync(filePath);

  if (!fileExists) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  const response = new NextResponse(fileBuffer);

  response.headers.set(
    "Content-Disposition",
    "attachment; filename=resume.pdf"
  );
  response.headers.set("Content-Type", "application/pdf");
  response.headers.set("Content-Length", fileBuffer.length.toString());

  return response;
}
