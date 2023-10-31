import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://be-product-catalog-fhdi.onrender.com';

const fetchData = async (url: string) => {
  try {
    const response: AxiosResponse = await axios.get(url);
    return response.data;
  } catch (e) {
    throw new Error(`An error occurred: ${String(e)}`);
  }
};

export const getProducts = () => fetchData(`${BASE_URL}/products`);
export const getProductById = (phoneId: number) =>
  fetchData(`${BASE_URL}/products/${phoneId}`);
export const getProductsByCategory = (category: string) =>
  fetchData(`${BASE_URL}/products-info/${category}`);
export const getProductInfoById = (itemId: string) =>
  fetchData(`${BASE_URL}/products-info/${itemId}`);
export const getProductImage = (pathname: string) =>
  fetchData(`${BASE_URL}/images/${pathname}`);

export const getProductsSorted = (sortField: string) => {
  const url = `${BASE_URL}?sort=${sortField}`;
  return fetchData(url);
};
