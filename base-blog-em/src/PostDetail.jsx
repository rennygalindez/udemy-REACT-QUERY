import { usePostComments, useDeletePost, useUpdatePost } from './hooks';

export function PostDetail({ post }) {
  // replace with useQuery
  const { id } = post;
  const { data, isLoading } = usePostComments(id); //custom hook!
  const {
    mutate: mutateDelete,
    isError: isErrorDelete,
    isSuccess: isSuccessDelete,
    isLoading: isLoadingDelete,
  } = useDeletePost();
  const {
    mutate: mutateUpdate,
    isError: isErrorUpdate,
    isSuccess: isSuccessUpdate,
    isLoading: isLoadingUpdate,
  } = useUpdatePost();

  if (isLoading) return <h3> Loading...</h3>;
  return (
    <>
      <h3 style={{ color: 'blue' }}>{post.title}</h3>
      <button onClick={() => mutateDelete(post.id)}>Delete</button>
      {isSuccessDelete && (
        <p style={{ color: 'green' }}>Post was not delete successfully</p>
      )}
      {isLoadingDelete && (
        <p style={{ color: 'purple' }}>Procesing the delete operation...</p>
      )}
      {isErrorDelete && (
        <p style={{ color: 'red' }}>Delete operation end with error!</p>
      )}

      <button onClick={() => mutateUpdate(post.id)}>Update title</button>
      {isSuccessUpdate && (
        <p style={{ color: 'green' }}>Post was not Update successfully</p>
      )}
      {isLoadingUpdate && (
        <p style={{ color: 'purple' }}>Procesing the Update operation...</p>
      )}
      {isErrorUpdate && (
        <p style={{ color: 'red' }}>Update operation end with error!</p>
      )}

      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
