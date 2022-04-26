import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaFilter, FaPlus } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { companyApi } from '../../api/company/company-api';
import { Button } from '../../components/common/button';
import { CompanyListItem } from '../../components/company/company-list-item';
import { EHeaderOptions, Header } from '../../components/common/header';
import { Company } from '../../entities/company.entity';
import { useToastify } from '../../hooks/use-toastify';
import { Pagination } from '../../utils/api.utils';

import { Container } from './styles';

export function Companies() {
  const { listCompanies } = companyApi();
  const { errorToast } = useToastify();

  const history = useHistory();

  const [pagination, setPagination] = useState<Pagination>({ take: 10, skip: 0 });
  const [companies, setCompanies] = useState<Company[]>([]);

  async function apiListCompanies() {
    const res = await listCompanies({ ...pagination, activeOnly: false, orderBy: 'name', orderType: 'ASC' });

    if (res.isError) return errorToast(res.message);

    setCompanies(res.data);
  }

  const incrementPagination = () => companies.length >= 10 && setPagination({ take: pagination.take + 10, skip: pagination.skip + 10 });
  const decrementPagination = () => pagination.take >= 20 && setPagination({ take: pagination.take - 10, skip: pagination.skip - 10 });

  useEffect(() => {
    apiListCompanies();
  }, [pagination]);

  return (
    <Container>
      <Header active={EHeaderOptions.COMPANIES} />

      <main>
        <nav>
          <h1>Companies</h1>

          <div>
            <Button text={`Add company`} />
            <Button mode="text" icon={<FaFilter />} />
            <Button mode="text" icon={<FaAngleLeft />} onClick={decrementPagination} />
            <Button mode="text" icon={<FaAngleRight />} onClick={incrementPagination} />
          </div>
        </nav>

        <div className="list">
          {companies.map(company => (
            <CompanyListItem key={company.id} company={company} />
          ))}
        </div>
      </main>
    </Container>
  );
}
