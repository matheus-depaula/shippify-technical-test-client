type AllowedHttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IHttpRequestOptions {
  body?: object | string;
  headers?: object;
  method: AllowedHttpMethods;
  params?: object;
  url: string;
}
