import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #ef404a;
    --secondary: #fcf173;

    --background: #f1f1f1;

    --white: #ffffff;
    --white-100: #f0f0f0;
    --white-200: #dadada;
    --white-300: #c4c4c4;
    --white-400: #acacac;
    --white-500: #949494;

    --black-500: #7e7e8a;
    --black-600: #5e5e68;
    --black-700: #3a3a41;
    --black-900: #121214;
    --black: #000000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
  }

  body,
  input,
  button {
    font: 400 1rem "Roboto", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    margin: 0;
    font-weight: 700;
  }

  button {
    border-style: solid;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
