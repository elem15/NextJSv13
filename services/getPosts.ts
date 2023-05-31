async function getData(): Promise<Post[]> {
  const data = await fetch(
    // "https://jsonplaceholder.typicode.com/posts",
    `/api/posts`,
    {
      next: { revalidate: 60 },
    }
  );
  return data.json();
}
async function searchData(search: string): Promise<Post[]> {
  const data = await fetch(
    `/api/posts?q=${search}`
    // `https://jsonplaceholder.typicode.com/posts?q=${search}`
    // `https://jsonplaceholder.typicode.com/posts?title_like=${search}`
    // `https://jsonplaceholder.typicode.com/posts?body_like=${search}`
  );
  return data.json();
}
export { getData, searchData };
