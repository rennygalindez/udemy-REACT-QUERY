import { useMutation } from 'react-query';
import { updatePost } from '../queryFunctions';
export default function useUpdatePost() {
  return useMutation(updatePost);
}
