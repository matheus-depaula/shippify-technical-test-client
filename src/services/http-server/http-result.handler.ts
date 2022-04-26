import { EHttpStatus } from './enums/http-status';
import { IHttpRequestResponse } from './interfaces/http-response.interface';

export interface IHttpResult<T = unknown> {
  data: T;
  message: string;
  isError: boolean;
}

export function httpResultHandler<T>(res: IHttpRequestResponse<T>): IHttpResult<T> {
  if (res.status === EHttpStatus.ERROR && res.errorMessage) {
    return {
      data: null as unknown as T,
      isError: true,
      message: res.errorMessage,
    };
  }

  return {
    isError: false,
    data: res.body,
    message: 'Ok',
  };
}
