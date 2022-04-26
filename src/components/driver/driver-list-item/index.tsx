import { Driver } from '../../../entities/driver.entity';
import { EEntityStatus } from '../../../entities/entity-status.enum';
import { Container } from './styles';

interface IDriverListItem {
  driver: Driver;
}

export function DriverListItem({ driver }: IDriverListItem) {
  return (
    <Container>
      <span className="name">
        {driver.first_name} {driver.last_name}
      </span>

      <section>
        <span className="email">{driver.email}</span>

        <span className="phone">{driver.phone}</span>
        <span className={`status ${driver.status === EEntityStatus.ACTIVE ? 'active' : 'disabled'}`}>{driver.status}</span>
      </section>
    </Container>
  );
}
