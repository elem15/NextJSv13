import { NextResponse } from "next/server";
import { posts } from "../posts";
import { cookies, headers } from "next/dist/client/components/headers";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const headersList = headers();
  const type = headersList.get("Content-Type");
  const cookiesList = cookies();
  const cookie = cookiesList.get("Cookie_1")?.value;

  const { id } = params;
  const idx = posts.findIndex((p) => p.id === +id);
  if (idx < 0) return NextResponse.json({ message: "Post don't exist" });
  const deletedPost = posts.splice(idx, 1);
  return NextResponse.json({ deletedPost, type, cookie });
}
