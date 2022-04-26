import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  main {
    height: 100%;
    padding: 1rem;

    nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    .list {
      padding: 1rem 0;

      div {
        & + div {
          margin-top: 1rem;
        }
      }
    }
  }
`;
