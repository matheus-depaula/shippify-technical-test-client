import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/use-auth';

import Logo from '../../../assets/logo-shippify.svg';
import { Container } from './styles';

export enum EHeaderOptions {
  COMPANIES,
  DRIVERS,
  VEHICLES,
}

interface IHeader {
  active: EHeaderOptions;
}

export function Header({ active }: IHeader) {
  const { logout } = useAuth();

  return (
    <Container>
      <section>
        <img src={Logo} alt="Shippify" />

        <nav>
          {/* <Link to="/companies" className={active === EHeaderOptions.COMPANIES ? 'active' : ''}>
            Companies
          </Link>

          <Link to="/drivers" className={active === EHeaderOptions.DRIVERS ? 'active' : ''}>
            Drivers
          </Link>

          <Link to="/vehicles" className={active === EHeaderOptions.VEHICLES ? 'active' : ''}>
            Vehicles
          </Link> */}

          <a href="/companies" className={active === EHeaderOptions.COMPANIES ? 'active' : ''}>
            Companies
          </a>

          <a href="/drivers" className={active === EHeaderOptions.DRIVERS ? 'active' : ''}>
            Drivers
          </a>

          <a href="/vehicles" className={active === EHeaderOptions.VEHICLES ? 'active' : ''}>
            Vehicles
          </a>

          <Link to="/" onClick={logout} className="logout">
            Logout
          </Link>
        </nav>
      </section>
    </Container>
  );
}
