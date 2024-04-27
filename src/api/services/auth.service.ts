import ApiClient from '.'
import tokensManager from '~/utils/classes/TokensManager'
import { IAuth } from '~/@types/api'

class AuthService extends ApiClient {
  private refreshPromise = null as null | Promise<IAuth>
  public async requestTokensByRefresh (): Promise<IAuth> {
    try {
      const { refreshToken } = tokensManager.getTokens()

      if (!this.refreshPromise) {
        const config = {
          headers: { Authorization: `Bearer ${refreshToken}` }
        }
        this.refreshPromise = this.post('/auth/refresh', { refresh: refreshToken }, config)
      }
      const result = await this.refreshPromise
      tokensManager.setTokens(result)
      this.refreshPromise = null
      return result
    } catch (_error) {
      tokensManager.deleteTokens()
      this.refreshPromise = null
      throw _error
    }
  }
}

export default AuthService
