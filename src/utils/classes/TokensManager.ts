import CookieManager from './CookieManager'
import { JWT_ADDRESS_IN_COOKIES_ACCESS, JWT_ADDRESS_IN_COOKIES_REFRESH, REMEMBER_ME } from '~/configs'
import { IAuth } from '~/@types/api'

/**
 * Use to work with tokens
 */
class TokensManager {
  getTokens (): IAuth {
    return {
      accessToken: CookieManager.getCookie(JWT_ADDRESS_IN_COOKIES_ACCESS) ?? sessionStorage[JWT_ADDRESS_IN_COOKIES_ACCESS],
      refreshToken: CookieManager.getCookie(JWT_ADDRESS_IN_COOKIES_REFRESH) ?? sessionStorage[JWT_ADDRESS_IN_COOKIES_REFRESH]
    }
  }

  setTokens ({ accessToken, refreshToken }: IAuth): void {
    // const decodedAccess = jwtDecode(accessToken)
    // const decodedRefresh = jwtDecode(refreshToken)
    const isRemember = CookieManager.getCookie(REMEMBER_ME) === 'true'
    if (isRemember) {
      CookieManager.setCookie(JWT_ADDRESS_IN_COOKIES_ACCESS, accessToken)
      CookieManager.setCookie(JWT_ADDRESS_IN_COOKIES_REFRESH, refreshToken)
    } else {
      sessionStorage[JWT_ADDRESS_IN_COOKIES_ACCESS] = accessToken
      sessionStorage[JWT_ADDRESS_IN_COOKIES_REFRESH] = refreshToken
    }
  }

  deleteTokens (): void {
    CookieManager.deleteCookie(JWT_ADDRESS_IN_COOKIES_ACCESS)
    CookieManager.deleteCookie(JWT_ADDRESS_IN_COOKIES_REFRESH)
    CookieManager.deleteCookie(REMEMBER_ME)
    sessionStorage.removeItem(JWT_ADDRESS_IN_COOKIES_ACCESS)
    sessionStorage.removeItem(JWT_ADDRESS_IN_COOKIES_REFRESH)
  }

  isAuth (): boolean {
    return !!this.getTokens().accessToken
  }
}

export default new TokensManager()
