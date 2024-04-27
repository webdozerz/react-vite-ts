import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { en } from './locales/en'

const resources = {
  en
}

void i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources
  })

export default i18n
