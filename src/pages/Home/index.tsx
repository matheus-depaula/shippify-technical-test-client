import { FormEvent, useState } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { useToastify } from '../../hooks/use-toastify';

import { Button } from '../../components/common/button';

import { Container, Form } from './styles';

export function Home() {
  const { login } = useAuth();
  const { errorToast } = useToastify();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (password.trim().length < 8) {
      return errorToast('Password must have at least 8 characters');
    }

    login(email, password);
  };

  return (
    <Container>
      <div className="wrapper">
        <main>
          <h1>Login</h1>

          <Form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />

            <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
            <Button text="Send" />
          </Form>
        </main>
      </div>
    </Container>
  );
}
