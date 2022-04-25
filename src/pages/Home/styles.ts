import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 50%;
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    background: var(--white);
    box-shadow: 0 0 0.5rem var(--white-200);
    border-bottom: solid 3px var(--primary);
    border-radius: 0.5rem;

    main {
      flex: 1;
      padding: 2rem;
      border-left: 1px solid var(--white-100);

      h1 {
        margin-bottom: 2rem;
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  input {
    width: 100%;
    height: 2rem;
    margin-bottom: 2rem;
    background: transparent;
    font-size: 1.25rem;
    border: none;
    border-bottom: 2px solid (--black-200);
    transition: border-bottom-color 0.3s;

    &::placeholder {
      color: var(--black-500);
    }

    &:focus {
      border-bottom-color: var(--primary);
      outline: none;
    }
  }
`;
