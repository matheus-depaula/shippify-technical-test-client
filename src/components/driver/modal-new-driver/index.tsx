import { FormEvent, useEffect, useState } from 'react';
import { companyApi } from '../../../api/company/company-api';
import { driverApi } from '../../../api/driver/driver-api';

import { useToastify } from '../../../hooks/use-toastify';
import { Button } from '../../common/button';

import { Modal } from '../../common/modal';

import { Form } from './styles';

interface IModalNewDriver {
  isOpen: boolean;
  closeModal: () => void;
  callback?: () => void;
}

export function ModalNewDriver({ isOpen, closeModal, callback }: IModalNewDriver) {
  const { successToast, errorToast } = useToastify();
  const { createDriver } = driverApi();
  const { listCompanies } = companyApi();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const companyRes = await listCompanies({ name: companyName, take: 1 });

    if (companyRes.isError) return errorToast(companyRes.message);

    if (companyRes.data.length <= 0) return errorToast('Company not exists');

    const driverRes = await createDriver({ firstName, lastName, email, phone, companyId: companyRes.data[0].id });

    if (driverRes.isError) return errorToast(driverRes.message);

    successToast('Driver created');

    if (callback) callback();

    closeModal();
  }

  useEffect(() => {
    if (!isOpen) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setCompanyName('');
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} header="New driver">
      <Form onSubmit={handleSubmit}>
        <div className="name">
          <input type="text" placeholder="First name" required autoFocus value={firstName} onChange={e => setFirstName(e.target.value)} />
          <input type="text" placeholder="Last name" required value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>

        <section>
          <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
          <input type="text" placeholder="Phone" required value={phone} onChange={e => setPhone(e.target.value)} />
        </section>

        <section>
          <input type="text" placeholder="Company name" required value={companyName} onChange={e => setCompanyName(e.target.value)} />
        </section>

        <div className="footer">
          <Button text="Cancel" mode="outlined" onClick={closeModal} style={{ background: 'transparent' }} />
          <Button isSubmit text="Confirm" />
        </div>
      </Form>
    </Modal>
  );
}
