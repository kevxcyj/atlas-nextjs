import { fetchAnswers } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const answers = await fetchAnswers(id);
  return NextResponse.json(answers);
}
