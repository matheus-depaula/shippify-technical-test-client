import { Company } from '../../../entities/company.entity';
import { EEntityStatus } from '../../../entities/entity-status.enum';
import { Container } from './styles';

interface ICompanyListItem {
  company: Company;
}

export function CompanyListItem({ company }: ICompanyListItem) {
  return (
    <Container>
      <span className="name">{company.name}</span>

      <div>
        <span className="plan">{company.plan_type} PLAN</span>
        <span className={`status ${company.status === EEntityStatus.ACTIVE ? 'active' : 'disabled'}`}>{company.status}</span>
      </div>
    </Container>
  );
}
