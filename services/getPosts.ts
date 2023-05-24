async function getData(): Promise<Post[]> {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  return data.json();
}
async function searchData(search: string): Promise<Post[]> {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts?title_like=${search}`
  );
  return data.json();
}
export { getData, searchData };
