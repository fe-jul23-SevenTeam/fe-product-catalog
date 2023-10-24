import axios from 'axios';

const BASE_URL = 'https://be-product-catalog-fhdi.onrender.com/phones';

export const getPhones = () => {
  return axios
    .get(BASE_URL)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
      throw new Error(error);
    });
};

export const getPhonesById = (phoneId: number) => {
  return axios
    .get(`${BASE_URL}/${phoneId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
      throw new Error(error);
    });
};

export const getPhonesSorted = (sortField: string) => {
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
