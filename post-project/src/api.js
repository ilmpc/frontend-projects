const baseURL = "https://jsonplaceholder.typicode.com";

export async function api(url, options) {
  const response = await fetch(baseURL + url, options);
  if (response.ok) {
    return response.json();
  }
  throw new Error("Logical error");
}

export async function getUser(userId) {
  const user = await api(`/users/${userId}`);
  return user;
}

export async function getUserPosts(userId) {
  const params = new URLSearchParams({ userId });
  const posts = await api(`/posts?${params}`);
  return posts;
}

export async function getUserWithPosts(userId) {
  const [user, posts] = await Promise.all([
    getUser(userId),
    getUserPosts(userId),
  ]);
  return { user, posts };
}
