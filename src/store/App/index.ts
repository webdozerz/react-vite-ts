import { makeAutoObservable, action, observable } from 'mobx'

class AppStore {
  errorApp: any = null

  constructor () {
    makeAutoObservable(this, {
      errorApp: observable,
      errorHandler: action
    })
  }

  errorHandler (error: any): void {
    this.errorApp = error
  }
}

export default AppStore
