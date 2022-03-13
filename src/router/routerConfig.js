import Categories from '../pages/Categories';
import Category from '../pages/Category';
import NotFound from '../pages/NotFound';

const ROUTER_CONFIG = [
  {
    name: 'Categories',
    path: '/',
    component: Categories,
    exact: true,
  },
  {
    name: 'Category',
    path: '/:slug',
    component: Category,
    exact: true,
  },
  {
    name: 'Not Found',
    path: '/not-found',
    component: NotFound,
    exact: false,
  },
];

export default ROUTER_CONFIG;
