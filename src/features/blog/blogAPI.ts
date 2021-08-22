export async function fetchPosts() {
  const blogResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await blogResponse.json();
}

export async function fetchPostById(id: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await response.json();
}