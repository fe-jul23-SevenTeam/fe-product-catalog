import axios from 'axios';

const BASE_URL = 'https://be-product-catalog-fhdi.onrender.com';

export const getProducts = () => {
  return axios
    .get(`${BASE_URL}/products`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
};

export const getProductById = (phoneId: number) => {
  return axios
    .get(`${BASE_URL}/products/${phoneId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
};

export const getProductsByCategory = (category: string) => {
  return axios
    .get(`${BASE_URL}/products-info/${category}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
};

export const getProductInfoById = (itemId: string) => {
  return axios
    .get(`${BASE_URL}/products-info/find/${itemId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
};

export const getProductsSorted = (sortField: string) => {
  const params = {
    sort: sortField,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
};
