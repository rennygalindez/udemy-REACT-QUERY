import { useQuery } from 'react-query';

async function fetchPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0',
  );
  return response.json();
}
export default function usePosts() {
  return useQuery('posts', fetchPosts, { cacheTime: 5000 });
}
