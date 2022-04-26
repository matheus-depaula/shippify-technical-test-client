import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from '../pages/Home';

export function CommonRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}
