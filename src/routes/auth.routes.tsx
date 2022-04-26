import { BrowserRouter, Route } from 'react-router-dom';
import { Companies } from '../pages/Companies';
import { Drivers } from '../pages/Drivers';
import { Vehicles } from '../pages/Vehicles';

export function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/drivers" component={Drivers} />
      <Route exact path={['/', '/companies']} component={Companies} />
      <Route exact path="/vehicles" component={Vehicles} />
    </BrowserRouter>
  );
}
