export async function fetchUsers(url: string) {
  const response = await fetch(url);
  return response.json();
}

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
export async function postNewUser(url: string, data: object): Promise<Object> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}
