import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaFilter } from 'react-icons/fa';
import { vehicleApi } from '../../api/vehicle/vehicle-api';
import { Button } from '../../components/common/button';
import { EHeaderOptions, Header } from '../../components/common/header';
import { ModalDriverFilter } from '../../components/driver/modal-driver-filter';
import { ModalNewVehicle } from '../../components/vehicle/modal-new-vehicle';
import { ModalUpdateVehicle } from '../../components/vehicle/modal-update-vehicle';
import { VehicleListItem } from '../../components/vehicle/vehicle-list-item';
import { EEntityStatus } from '../../entities/entity-status.enum';
import { Vehicle } from '../../entities/vehicle.entity';
import { useModal } from '../../hooks/use-modal';
import { useToastify } from '../../hooks/use-toastify';
import { Pagination } from '../../utils/api.utils';

import { Container } from './styles';

type Filters = { driverId?: number };

export function Vehicles() {
  const { listVehicles } = vehicleApi();
  const { errorToast } = useToastify();
  const { isModalOpen: isAddModalOpen, openModal: openAddModal, closeModal: closeAddModal } = useModal();
  const { isModalOpen: isFilterModalOpen, openModal: openFilterModal, closeModal: closeFIlterModal } = useModal();

  const [pagination, setPagination] = useState<Pagination>({ take: 10, skip: 0 });
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filters, setFilters] = useState<Filters>({});

  async function apiListVehicles() {
    const res = await listVehicles({ ...pagination, ...filters, activeOnly: false, orderBy: 'plate', orderType: 'ASC' });

    if (res.isError) return errorToast(res.message);

    setVehicles(res.data);
  }

  function handleFilter(id: number) {
    if (id === 0) setFilters({});

    setFilters({ driverId: id });
  }

  const incrementPagination = () => vehicles.length >= 10 && setPagination({ take: pagination.take + 10, skip: pagination.skip + 10 });
  const decrementPagination = () => pagination.take >= 20 && setPagination({ take: pagination.take - 10, skip: pagination.skip - 10 });

  useEffect(() => {
    apiListVehicles();
  }, [pagination]);

  useEffect(() => {
    apiListVehicles();
  }, [filters.driverId]);

  return (
    <Container>
      <Header active={EHeaderOptions.VEHICLES} />

      <main>
        <nav>
          <h1>Vehicles</h1>

          <div>
            <Button text={`Add vehicle`} onClick={openAddModal} />
            <Button mode="text" icon={<FaFilter />} onClick={openFilterModal} />
            <Button mode="text" icon={<FaAngleLeft />} onClick={decrementPagination} />
            <Button mode="text" icon={<FaAngleRight />} onClick={incrementPagination} />
          </div>
        </nav>

        <div className="list">
          {vehicles.map(vehicle => (
            <VehicleListItem key={vehicle.id} vehicle={vehicle} updateList={apiListVehicles} />
          ))}
        </div>
      </main>

      <ModalNewVehicle isOpen={isAddModalOpen} closeModal={closeAddModal} callback={apiListVehicles} />

      <ModalDriverFilter isOpen={isFilterModalOpen} closeModal={closeFIlterModal} callback={handleFilter} />
    </Container>
  );
}
