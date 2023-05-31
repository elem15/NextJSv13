import { NextResponse } from "next/server";
import { posts } from "./posts";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("q");
  let filteredPosts = posts;
  if (search) {
    filteredPosts = posts.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  return NextResponse.json(filteredPosts);
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json(body);
}
