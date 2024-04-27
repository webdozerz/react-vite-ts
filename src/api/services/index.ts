import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Interceptor } from '~/@types/api'

class ApiClient {
  protected readonly apiClient: AxiosInstance

  constructor (baseURL: string) {
    this.apiClient = axios.create({
      baseURL
    })
  }

  addInterceptors (ClassInterceptor: typeof Interceptor): this {
    const inst = new ClassInterceptor(this.apiClient)
    if (inst.addResponseInterceptor) {
      inst.addResponseInterceptor()
    }
    if (inst.addRequestInterceptor) {
      inst.addRequestInterceptor()
    }
    if (!inst.addRequestInterceptor && !inst.addResponseInterceptor) {
      console.warn('YOU HAVE NOT ADDED ANY INTERCEPTOR FOR YOUR API SERVICE !!!')
    }
    return this
  }

  protected async get<R, D = any> (url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return await this.apiClient.get<any, R>(url, config)
  }

  protected async post<R, D = any> (url: string, data?: any, config?: AxiosRequestConfig<D>): Promise<R> {
    return await this.apiClient.post(url, data, config)
  }

  protected async put<R, D = any> (url: string, data?: any, config?: AxiosRequestConfig<D>): Promise<R> {
    return await this.apiClient.put<any, R, D>(url, data, config)
  }

  protected async delete<R, D = any> (url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return await this.apiClient.delete<any, R>(url, config)
  }
}

export default ApiClient
