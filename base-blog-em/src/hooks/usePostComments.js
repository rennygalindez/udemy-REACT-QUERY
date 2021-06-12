import { useQuery } from 'react-query';

async function fetchComments({ queryKey }) {
  const [query, postId] = queryKey;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  );
  return response.json();
}

export default function usePostComments(postId) {
  return useQuery(['postDetails', postId], fetchComments);
}
