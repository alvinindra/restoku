import Home from '../views/pages/home';
import Detail from '../views/pages/detail-resto';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
};

export default routes;
