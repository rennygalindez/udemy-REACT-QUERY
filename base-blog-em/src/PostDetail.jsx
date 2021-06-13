import { usePostComments, useDeletePost } from './hooks';

async function updatePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: 'PATCH', data: { title: 'REACT QUERY FOREVER!!!!' } },
  );
  return response.json();
}

export function PostDetail({ post }) {
  // replace with useQuery
  const { id } = post;
  const { data, isLoading } = usePostComments(id); //custom hook!
  const {
    mutate,
    isError: isErrorDelete,
    isSuccess: isSuccessDelete,
    isLoading: isLoadingDelete,
  } = useDeletePost();

  if (isLoading) return <h3> Loading...</h3>;
  return (
    <>
      <h3 style={{ color: 'blue' }}>{post.title}</h3>
      <button onClick={() => mutate(post.id)}>Delete</button>
      {isSuccessDelete && (
        <p style={{ color: 'green' }}>Post was not delete successfully</p>
      )}
      {isLoadingDelete && (
        <p style={{ color: 'purple' }}>Procesing the delete operation...</p>
      )}
      {isErrorDelete && (
        <p style={{ color: 'red' }}>Delete operation end with error!</p>
      )}

      <button>Update title</button>
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
