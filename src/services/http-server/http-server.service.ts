import _ from 'lodash';
import axios, { AxiosRequestConfig } from 'axios';
import { EHttpStatus } from './enums/http-status';
import { httpResultHandler, IHttpResult } from './http-result.handler';
import { IHttpRequestOptions } from './interfaces/http-request-options.interface';
import { IHttpRequestResponse } from './interfaces/http-response.interface';

class HttpServer {
  public async execute<T>(options: IHttpRequestOptions): Promise<IHttpResult<T>> {
    const request: AxiosRequestConfig = {
      data: options.body,
      headers: _.omitBy({ ...options.headers }, _.isUndefined.bind(_)),
      method: options.method,
      params: options.params,
      url: options.url,
    };

    try {
      const response = await axios(request);

      const result: IHttpRequestResponse<T> = {
        body: response.data,
        headers: response.headers,
        status: EHttpStatus.SUCCESS,
        statusCode: response.status,
      };

      return httpResultHandler(result);
    } catch (err) {
      const result: IHttpRequestResponse<T> = {
        body: _.get(err, 'response.data.body'),
        errorMessage: _.get(err, 'response.data.message'),
        headers: _.get(err, 'response.headers', {}),
        status: EHttpStatus.ERROR,
        statusCode: _.get(err, 'response.status'),
      };

      return httpResultHandler(result);
    }
  }
}

const httpServer = new HttpServer();

export { httpServer };
