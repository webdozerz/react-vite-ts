import AbstractInterceptor from '~/api/interceptors'

export enum RESPONSE_STATUS {
  UNAUTHORIZED = 401
}

export interface IAuth {
  accessToken: string
  refreshToken: string
}

export declare class Interceptor extends AbstractInterceptor {
  public addResponseInterceptor? (): void
  public addRequestInterceptor? (): void
}

export interface IPageRequest<T> {
  count: number
  rows: T[]
}
