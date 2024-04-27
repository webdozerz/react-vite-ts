// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class CookieManager {
  static setCookie (name: string, data: string, expires?: string | number): void {
    document.cookie = `${name}=${data}; expires=${
      expires ? new Date(expires).toUTCString() : ''
    }; path=/; max-age=${!expires ? '86400' : ''}`
  }

  static getCookie (name: string): string | undefined {
    const { cookie } = document
    const value = `; ${cookie}`
    const [, right] = value.split(`; ${name}=`)
    return right?.split(';').shift()
  }

  static deleteCookie (name: string): void {
    this.setCookie(name, '', -1)
  }
}

export default CookieManager
