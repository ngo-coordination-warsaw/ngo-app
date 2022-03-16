import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.warszawa-ukraina.info',
  timeout: 30000,
});

const getCategoryList = (categoryId) => api.get(`data/${categoryId}`);

const getCategories = () => api.get('categories');

export { getCategoryList, getCategories };
