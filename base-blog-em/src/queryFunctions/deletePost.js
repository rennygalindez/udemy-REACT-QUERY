export default async function deletePost(postId) {
  const response = await fetch(
    `https://kjsonplaceholder.typicode.com/postId/${postId}`,
    { method: 'DELETE' },
  );
  return response.json();
}
