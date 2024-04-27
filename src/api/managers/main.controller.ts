import MainInterceptor from '../interceptors/MainInterceptor'
import AuthService from '~/api/services/auth.service'
const BASE_URL = `${import.meta.env.REACT_APP_API_BASE_URL}/api`

const MainController = {
  authService: new AuthService(BASE_URL).addInterceptors(MainInterceptor)
}

export default MainController
