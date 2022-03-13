import Accommodation from '../pages/Accommodation';
import Food from '../pages/Food';
import Hospitals from '../pages/Hospitals';
import FirstAid from '../pages/FirstAid';
import CurrencyExchange from '../pages/CurrencyExchange';
import Work from '../pages/Work';
import Students from '../pages/Students';
import Vet from '../pages/Vet';
import NotFound from '../pages/NotFound';

const ROUTER_CONFIG = [
  {
    name: 'Accommodation',
    path: '/',
    component: Accommodation,
    exact: true,
  },
  {
    name: 'Food',
    path: '/food',
    component: Food,
    exact: true,
  },
  {
    name: 'Hospitals',
    path: '/hospitals',
    component: Hospitals,
    exact: true,
  },
  {
    name: 'First Aid',
    path: '/first-aid',
    component: FirstAid,
    exact: true,
  },
  {
    name: 'Currencey Exchange',
    path: '/currency-exchange',
    component: CurrencyExchange,
    exact: true,
  },
  {
    name: 'Work',
    path: '/work',
    component: Work,
    exact: true,
  },
  {
    name: 'Students',
    path: '/students',
    component: Students,
    exact: true,
  },
  {
    name: 'Vet',
    path: '/vet',
    component: Vet,
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
