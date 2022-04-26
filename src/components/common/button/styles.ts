import styled from 'styled-components';

export type Mode = 'text' | 'flat' | 'outlined';

interface IContainer {
  mode?: Mode;
}

export const Container = styled.button<IContainer>`
  /* min-height: 1.75rem; */
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: center;
  justify-items: center;
  font-size: 1rem;
  color: ${props => (props.mode === 'flat' ? 'var(--white)' : 'var(--primary)')};
  background: ${props => (props.mode === 'flat' ? 'var(--primary)' : '')};
  border-width: 1px;
  border-color: ${props => (props.mode === 'outlined' ? 'var(--primary)' : 'transparent')};
  border-radius: 0.2rem;
  transition: filter 0.3s;

  /* &:hover {
    filter: brightness(1.1);
  } */
`;
