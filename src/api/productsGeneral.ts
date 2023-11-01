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

export const getProductInfoById = (itemId: string) =>
  fetchData(`${BASE_URL}/products-info/find/${itemId}`);

export const getProductImage = (pathname: string) =>
  fetchData(`${BASE_URL}/images/${pathname}`);

export const getProductsByParams = (page: number, pageSize: string, sorting: string, category: string) => {
  return fetchData(`${BASE_URL}/products?page=${page}&pageSize=${pageSize}&sortBy=${sorting}&category=${category}`);
};

export const getProductsByCategory = (category: string) => {
  return fetchData(`${BASE_URL}/products/length/${category}`);
};
