import stores from '~/store'
import AbstractInterceptor from '.'
import { RESPONSE_STATUS } from '~/@types/api'
import MainController from '../managers/main.controller'
import tokensManager from '~/utils/classes/TokensManager'

const REFRESH_URL = '/auth/refresh'

class MainInterceptor extends AbstractInterceptor {
  public addResponseInterceptor (): void {
    this.response.use(
      response => response.data.result,
      async (error: any) => {
        const originalConfig = error.config
        if (error.response &&
          (error.response.status === RESPONSE_STATUS.UNAUTHORIZED) &&
          error.response.config.url !== REFRESH_URL &&
          !originalConfig._retry
        ) {
          originalConfig._retry = true
          try {
            const { accessToken } = await MainController.authService.requestTokensByRefresh()
            originalConfig.headers.Authorization = `Bearer ${accessToken}`
            return await this.apiClient(originalConfig)
          } catch (_error: any) {
            const { appStore } = stores
            appStore.errorHandler(error)
            return await Promise.reject(_error)
          }
        }
        return await Promise.reject(error)
      }
    )
  }

  public addRequestInterceptor (): void {
    this.request.use(config => {
      const { accessToken } = tokensManager.getTokens()
      const auth = { Authorization: `Bearer ${accessToken}` }
      if (accessToken) {
        config.headers = config.headers
          ? { ...config.headers, ...auth }
          : auth
      }
      return config
    })
  }
}

export default MainInterceptor
