export async function fetchUsers(url: string) {
  const response = await fetch(url);
  return response.json();
}

export async function postNewUser(url: string, data: object): Promise<Object> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

export function maxAllowedDateOfBirth(): Date {
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  return maxDate;
}
