import styled from "styled-components";

export const Container = styled.div`
  button {
    padding: 0.2rem 0.5rem;
    font-size: 1.25rem;
    color: var(--white);
    background: var(--primary);
    border-color: transparent;
    border-radius: 0.2rem;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;
