/* eslint-disable max-len */
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

const BACKUP_URL
  = 'https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/api/';

// тестирую
export async function getProductById(productId: string) {
  const response = await fetch(`${BACKUP_URL}/phones/${productId}.json`);

  return response.json();
}
