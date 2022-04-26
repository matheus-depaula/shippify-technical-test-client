import { EEntityStatus } from '../../../entities/entity-status.enum';
import { Vehicle } from '../../../entities/vehicle.entity';
import { useModal } from '../../../hooks/use-modal';
import { ModalUpdateVehicle } from '../modal-update-vehicle';
import { Container } from './styles';

interface IVehicleListItem {
  vehicle: Vehicle;
  updateList: () => void;
}

export function VehicleListItem({ vehicle, updateList }: IVehicleListItem) {
  const { openModal, closeModal, isModalOpen } = useModal();

  return (
    <Container onClick={openModal}>
      <span className="plate model">
        {vehicle.plate} - {vehicle.model}
      </span>

      <section>
        <span className="type">{vehicle.type}</span>

        <span className="capacity">Capacity: {vehicle.capacity}</span>
        <span className={`status ${vehicle.status === EEntityStatus.ACTIVE ? 'active' : 'disabled'}`}>{vehicle.status}</span>
      </section>

      <ModalUpdateVehicle vehicle={vehicle} isOpen={isModalOpen} closeModal={closeModal} callback={updateList} />
    </Container>
  );
}
