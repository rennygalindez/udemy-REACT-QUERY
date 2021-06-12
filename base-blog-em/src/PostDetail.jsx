import { usePostComments } from './hooks';
async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: 'DELETE' },
  );
  return response.json();
}

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
  if (isLoading) return <h3> Loading...</h3>;
  return (
    <>
      <h3 style={{ color: 'blue' }}>{post.title}</h3>
      <button>Delete</button> <button>Update title</button>
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
