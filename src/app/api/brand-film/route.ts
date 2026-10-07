import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export async function GET() {
  const exists = fs.existsSync(path.join(process.cwd(), "public", "brand-film.mp4"));
  return NextResponse.json({ exists });
}
