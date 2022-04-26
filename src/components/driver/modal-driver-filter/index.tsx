import { FormEvent, useState } from 'react';
import { driverApi } from '../../../api/driver/driver-api';

import { useToastify } from '../../../hooks/use-toastify';
import { Button } from '../../common/button';

import { Modal } from '../../common/modal';

import { Form } from './styles';

interface IModalDriverFilter {
  isOpen: boolean;
  closeModal: () => void;
  callback: (id: number) => void;
}

export function ModalDriverFilter({ isOpen, closeModal, callback }: IModalDriverFilter) {
  const { errorToast } = useToastify();
  const { listDrivers } = driverApi();

  const [email, setEmail] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email === '') {
      callback(0);

      return closeModal();
    }

    const driverRes = await listDrivers({ email, take: 1 });

    if (driverRes.isError) return errorToast(driverRes.message);

    if (driverRes.data.length <= 0) return errorToast('Driver not exists');

    callback(driverRes.data[0].id);

    closeModal();
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal} header="Filters">
      <Form onSubmit={handleSubmit}>
        <section>
          <input type="email" placeholder="Email" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
        </section>

        <div className="footer">
          <Button text="Cancel" mode="outlined" onClick={closeModal} style={{ background: 'transparent' }} />
          <Button isSubmit text="Confirm" />
        </div>
      </Form>
    </Modal>
  );
}
