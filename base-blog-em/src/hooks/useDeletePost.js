import { useMutation } from 'react-query';
import { deletePost } from '../queryFunctions';
export default function useDeletePost() {
  return useMutation((postId) => deletePost(postId));
}
