import styled from 'styled-components';

export const Form = styled.form`
  width: 576px;
  max-width: calc(100vw - 2rem);

  input,
  select {
    width: 100%;
    height: 2.05rem;
    background: transparent;
    font-size: 1.25rem;
    border: none;
    border-bottom: 2px solid var(--black-500);
    transition: border-bottom-color 0.3s;

    &::placeholder {
      color: var(--black-500);
    }

    &:focus {
      border-bottom-color: var(--primary);
      outline: none;
    }
  }

  section {
    margin: 1rem 0;
    display: flex;
    gap: 1rem;
  }

  .disabling-message {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .name,
  .footer {
    width: 100%;

    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  .footer {
    gap: 0.5rem;
  }
`;
