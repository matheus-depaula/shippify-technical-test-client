import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  background: var(--white);
  box-shadow: 0 0 0.5rem var(--white-200);

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
      width: 120px;
    }

    nav {
      display: flex;
      align-items: center;

      a {
        position: relative;
        font-size: 1.125rem;

        &:hover {
          color: var(--primary);
        }

        & + a {
          margin-left: 1.5rem;
        }
      }

      a.logout::before {
        content: '|';

        position: absolute;
        left: -0.8rem;
        color: var(--primary);
      }

      .active {
        color: var(--primary);
      }
    }
  }
`;
