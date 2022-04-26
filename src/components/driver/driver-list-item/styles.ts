import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white);
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem var(--white-300);

  section {
    display: flex;
    gap: 2rem;

    .name {
      text-overflow: ellipsis;
    }

    .status.active {
      color: var(--primary);
    }

    .status.disabled {
      text-decoration: line-through;
      color: var(--black-500);
    }
  }
`;
