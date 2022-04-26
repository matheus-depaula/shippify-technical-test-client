import { EHttpStatus } from '../enums/http-status';
import { EHttpStatusCode } from '../enums/http-status-code';

export interface IHttpRequestResponse<T = unknown> {
  body: T;
  error?: object;
  errorMessage?: string;
  headers: object;
  status: EHttpStatus;
  statusCode: EHttpStatusCode;
}
