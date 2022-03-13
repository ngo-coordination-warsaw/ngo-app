import axios from 'axios';

const api = axios.create({
  baseURL: 'http://51.15.81.115:8080',
  timeout: 30000,
});

const getCategoryList = (categoryId) => api.get(`data/${categoryId}`);

const getCategories = () => api.get('categories');

export { getCategoryList, getCategories };
