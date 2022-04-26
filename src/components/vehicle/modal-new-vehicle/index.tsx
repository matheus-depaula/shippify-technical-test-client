import { FormEvent, useEffect, useState } from 'react';
import { driverApi } from '../../../api/driver/driver-api';
import { vehicleApi } from '../../../api/vehicle/vehicle-api';
import { EVehicleType } from '../../../entities/vehicle-type.enum';

import { useToastify } from '../../../hooks/use-toastify';
import { Button } from '../../common/button';

import { Modal } from '../../common/modal';

import { Form } from './styles';

interface IModalNewVehicle {
  isOpen: boolean;
  closeModal: () => void;
  callback?: () => void;
}

export function ModalNewVehicle({ isOpen, closeModal, callback }: IModalNewVehicle) {
  const { successToast, errorToast } = useToastify();
  const { createVehicle } = vehicleApi();
  const { listDrivers } = driverApi();

  const [plate, setPlate] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState<EVehicleType>(EVehicleType.CAR);
  const [capacity, setCapacity] = useState('');
  const [driverEmail, setDriverEmail] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const driverRes = await listDrivers({ email: driverEmail, take: 1 });

    if (driverRes.isError) return errorToast(driverRes.message);

    if (driverRes.data.length <= 0) return errorToast('Driver not exists');

    const vehicleRes = await createVehicle({ plate, model, type, capacity, driverId: driverRes.data[0].id });

    if (vehicleRes.isError) return errorToast(vehicleRes.message);

    successToast('Vehicle created');

    if (callback) callback();

    closeModal();
  }

  useEffect(() => {
    if (!isOpen) {
      setPlate('');
      setModel('');
      setType(EVehicleType.CAR);
      setCapacity('');
      setDriverEmail('');
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} header="New vehicle">
      <Form onSubmit={handleSubmit}>
        <div className="name">
          <input type="text" placeholder="Plate" required autoFocus value={plate} onChange={e => setPlate(e.target.value)} />
          <input type="text" placeholder="Model" required value={model} onChange={e => setModel(e.target.value)} />
        </div>

        <section>
          <select name="type" id="type" onChange={e => setType(e.target.value as EVehicleType)}>
            <option value={EVehicleType.CAR}>Car</option>
            <option value={EVehicleType.MOTORCYCLE}>Motorcycle</option>
            <option value={EVehicleType.TRUCK}>Truck</option>
          </select>

          <input type="text" placeholder="Capacity" required value={capacity} onChange={e => setCapacity(e.target.value)} />
        </section>

        <section>
          <input type="email" placeholder="Driver email" required value={driverEmail} onChange={e => setDriverEmail(e.target.value)} />
        </section>

        <div className="footer">
          <Button text="Cancel" mode="outlined" onClick={closeModal} style={{ background: 'transparent' }} />
          <Button isSubmit text="Confirm" />
        </div>
      </Form>
    </Modal>
  );
}
