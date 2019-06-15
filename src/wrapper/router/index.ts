import sheet from '@/sheet/router';

const routes = [
  {
    path: '',
    redirect: 'index'
  },
  ...sheet,
];

export default routes;
