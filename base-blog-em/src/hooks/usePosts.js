import { useQuery, useQueryClient } from 'react-query';
import { fetchPosts } from '../queryFunctions';

export default function usePosts(page) {
  const nextPage = page + 1;
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(['posts', nextPage], fetchPosts); // I dont know if it's the best way to prefetch! but works!
  return useQuery(['posts', page], fetchPosts);
}
