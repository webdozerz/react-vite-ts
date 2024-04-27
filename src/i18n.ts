import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { en } from './locales/en'

void i18n
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: { en }
  })

export default i18n
