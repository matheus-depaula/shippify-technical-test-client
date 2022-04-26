export interface IApiResponse<T = undefined> {
  data: T;
  isError?: boolean;
  message?: string;
}

export interface IApiErrorResponse {
  message: string;
}
