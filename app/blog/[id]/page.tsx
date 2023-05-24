import { Metadata } from "next";
import React from "react";

type Props = {
  params: { id: string };
};

async function getData(id: string): Promise<Post> {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });
  if (!data.ok) throw new Error('Cant\'t fetch data!')
  return data.json();
}
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const blog = await getData(id);
  return { title: blog.title };
}
export default async function blog({ params }: Props) {
  const blog = await getData(params.id);
  return (
    <div>
      <h1>Blog</h1>
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>
    </div>
  );
}
