export const API_BASE_URL = (): string => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const PORT = process.env.REACT_APP_SERVER_PORT;

  return `${SERVER_URL}:${PORT}`;
};

export type Pagination = { take: number; skip: number };
