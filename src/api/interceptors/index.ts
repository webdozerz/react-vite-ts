import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosInterceptorManager,
  AxiosResponse
} from 'axios'

abstract class AbstractInterceptor {
  protected apiClient: AxiosInstance
  protected request: AxiosInterceptorManager<AxiosRequestConfig<any>>
  protected response: AxiosInterceptorManager<AxiosResponse<any, any>>

  constructor (apiClient: AxiosInstance) {
    this.apiClient = apiClient
    this.request = apiClient.interceptors.request
    this.response = apiClient.interceptors.response
  }
}

export default AbstractInterceptor
