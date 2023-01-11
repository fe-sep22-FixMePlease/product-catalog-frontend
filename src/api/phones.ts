// eslint-disable-next-line
const API_URL =
  'https://spiffy-chimera-5151e2.netlify.app/.netlify/functions/server';

export async function getAllProducts() {
  const response = await fetch(`${API_URL}/products`);

  return response.json();
}

export async function getSortedProducts(
  category: string,
  sortBy: string,
  page: number,
  perPage: number,
) {
  const response = await fetch(
    `${API_URL}/products?page=${page}&perPage=${perPage}&sortBy=${sortBy}&category=${category}`,
  );

  return response.json();
}
