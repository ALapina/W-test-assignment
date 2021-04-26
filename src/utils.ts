export async function fetchUsers(url: string) {
  const response = await fetch(url);
  return response.json();
}
