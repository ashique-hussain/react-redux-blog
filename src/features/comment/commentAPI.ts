export async function fetchCommentsByPostId(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    return await response.json();
}