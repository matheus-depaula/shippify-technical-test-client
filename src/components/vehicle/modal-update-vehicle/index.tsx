import { FormEvent, useEffect, useState } from 'react';
import { vehicleApi } from '../../../api/vehicle/vehicle-api';
import { UpdateVehicleDto } from '../../../api/vehicle/vehicle-api.dto';
import { EVehicleType } from '../../../entities/vehicle-type.enum';
import { Vehicle } from '../../../entities/vehicle.entity';

import { useToastify } from '../../../hooks/use-toastify';
import { Button } from '../../common/button';

import { Modal } from '../../common/modal';

import { Form } from './styles';

interface IModalModalUpdateVehicle {
  vehicle: Vehicle;
  isOpen: boolean;
  closeModal: () => void;
  callback: () => void;
}

export function ModalUpdateVehicle({ vehicle: _vehicle, isOpen, closeModal, callback }: IModalModalUpdateVehicle) {
  const { successToast, errorToast } = useToastify();
  const { updateVehicle, disableVehicle } = vehicleApi();

  const [vehicle, setVehicle] = useState<Vehicle>();
  const [isEditing, setIsEditing] = useState(false);
  const [isDisabling, setIsDisabling] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const payload: UpdateVehicleDto = { id: _vehicle.id };

    if (vehicle?.plate !== _vehicle.plate) payload.plate = vehicle?.plate;
    if (vehicle?.model !== _vehicle.model) payload.model = vehicle?.model;
    if (vehicle?.type !== _vehicle.type) payload.type = vehicle?.type;
    if (vehicle?.capacity !== _vehicle.capacity) payload.capacity = vehicle?.capacity;

    const vehicleRes = await updateVehicle(payload);

    if (vehicleRes.isError) return errorToast(vehicleRes.message);

    successToast('Vehicle updated');

    closeModal();

    callback();
  }

  async function handleDisableVehicle() {
    const res = await disableVehicle({ id: _vehicle.id });

    if (res.isError) return errorToast(res.message);

    closeModal();

    callback();
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setVehicle(_vehicle);
  }

  useEffect(() => {
    if (!isOpen) {
      setVehicle(undefined);
      setIsEditing(false);
      setIsDisabling(false);
    } else setVehicle(_vehicle);
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} header="Vehicle info">
      <Form onSubmit={handleSubmit}>
        {isDisabling ? (
          <>
            <div className="disabling-message">
              <h2>Are you sure disabling {vehicle?.plate}?</h2>
            </div>

            <div className="footer">
              <Button text="Yes" mode="text" onClick={handleDisableVehicle} style={{ background: 'transparent' }} />
              <Button text="Cancel" mode="flat" onClick={() => setIsDisabling(false)} />
            </div>
          </>
        ) : (
          <>
            <div className="name">
              <input
                type="text"
                placeholder="Plate"
                required
                disabled={!isEditing}
                value={vehicle?.plate}
                onChange={e => setVehicle({ ...(vehicle as Vehicle), plate: e.target.value })}
              />
              <input
                type="text"
                placeholder="Model"
                required
                disabled={!isEditing}
                value={vehicle?.model}
                onChange={e => setVehicle({ ...(vehicle as Vehicle), model: e.target.value })}
              />
            </div>

            <section>
              <select
                name="type"
                id="type"
                disabled={!isEditing}
                value={vehicle?.type}
                onChange={e => setVehicle({ ...(vehicle as Vehicle), type: e.target.value as EVehicleType })}
              >
                <option value={EVehicleType.CAR}>Car</option>
                <option value={EVehicleType.MOTORCYCLE}>Motorcycle</option>
                <option value={EVehicleType.TRUCK}>Truck</option>
              </select>

              <input
                type="text"
                placeholder="Capacity"
                required
                disabled={!isEditing}
                value={vehicle?.capacity}
                onChange={e => setVehicle({ ...(vehicle as Vehicle), capacity: e.target.value })}
              />
            </section>
          </>
        )}

        {isEditing ? (
          <div className="footer">
            <Button text="Cancel" mode="outlined" onClick={handleCancelEdit} style={{ background: 'transparent' }} />
            <Button isSubmit text="Confirm" />
          </div>
        ) : (
          !isDisabling && (
            <div className="footer">
              <Button text="Disable vehicle" mode="text" onClick={() => setIsDisabling(true)} style={{ background: 'transparent' }} />
              <Button text="Edit" mode="flat" onClick={() => setIsEditing(true)} />
            </div>
          )
        )}
      </Form>
    </Modal>
  );
}
