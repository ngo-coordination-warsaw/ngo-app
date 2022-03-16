import Categories from '../pages/Categories';
import Category from '../pages/Category';
import NotFound from '../pages/NotFound';

const BASE_ROUTE = '/:lang';
const ROUTER_CONFIG = [
  {
    name: 'Categories',
    path: BASE_ROUTE,
    component: Categories,
    exact: true,
  },
  {
    name: 'Category',
    path: `${BASE_ROUTE}/:slug`,
    component: Category,
    exact: true,
  },
  {
    name: 'Not Found',
    path: `${BASE_ROUTE}/not-found`,
    component: NotFound,
    exact: false,
  },
];

export { BASE_ROUTE, ROUTER_CONFIG };
