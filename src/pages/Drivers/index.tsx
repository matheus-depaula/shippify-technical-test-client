import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaFilter, FaPlus } from 'react-icons/fa';
import { driverApi } from '../../api/driver/driver-api';
import { Button } from '../../components/common/button';
import { DriverListItem } from '../../components/driver/driver-list-item';
import { EHeaderOptions, Header } from '../../components/common/header';
import { Driver } from '../../entities/driver.entity';
import { useToastify } from '../../hooks/use-toastify';
import { Pagination } from '../../utils/api.utils';

import { Container } from './styles';
import { ModalNewDriver } from '../../components/driver/modal-new-driver';
import { useModal } from '../../hooks/use-modal';

export function Drivers() {
  const { listDrivers } = driverApi();
  const { errorToast } = useToastify();
  const { openModal, closeModal, isModalOpen } = useModal();

  const [pagination, setPagination] = useState<Pagination>({ take: 10, skip: 0 });
  const [drivers, setDrivers] = useState<Driver[]>([]);

  async function apiListDrivers() {
    const res = await listDrivers({ ...pagination, activeOnly: false, orderBy: 'first_name', orderType: 'ASC' });

    if (res.isError) return errorToast(res.message);

    setDrivers(res.data);
  }

  function filter() {}

  const incrementPagination = () => drivers.length >= 10 && setPagination({ take: pagination.take + 10, skip: pagination.skip + 10 });
  const decrementPagination = () => pagination.take >= 20 && setPagination({ take: pagination.take - 10, skip: pagination.skip - 10 });

  useEffect(() => {
    apiListDrivers();
  }, [pagination]);

  return (
    <Container>
      <Header active={EHeaderOptions.DRIVERS} />

      <main>
        <nav>
          <h1>Drivers</h1>

          <div>
            <Button text={`Add driver`} onClick={openModal} />
            <Button mode="text" icon={<FaFilter />} onClick={filter} />
            <Button mode="text" icon={<FaAngleLeft />} onClick={decrementPagination} />
            <Button mode="text" icon={<FaAngleRight />} onClick={incrementPagination} />
          </div>
        </nav>

        <div className="list">
          {drivers.map(driver => (
            <DriverListItem key={driver.id} driver={driver} />
          ))}
        </div>
      </main>

      <ModalNewDriver isOpen={isModalOpen} closeModal={closeModal} callback={apiListDrivers} />
    </Container>
  );
}
