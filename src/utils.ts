type FetchedDataType = {
  data: [];
  page: number;
  total_pages: number;
};

export async function fetchUsers(url: string): Promise<FetchedDataType> {
  const response = await fetch(url);
  return response.json();
}
