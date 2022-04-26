import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);
  padding: 1rem;
  position: relative;
  border-radius: 0.24rem;

  .modal-header {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 0;
      background: transparent;
      border: none;
    }
  }
`;
