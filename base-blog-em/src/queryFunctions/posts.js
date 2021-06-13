export default async function fetchPosts({ queryKey }) {
  const [query, page] = queryKey;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
  );
  return response.json();
}
