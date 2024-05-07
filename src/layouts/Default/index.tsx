import React, { JSX, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'

import s from './styles.module.scss'

import Header from '~/components/Base/Header'

import { useTranslation } from 'react-i18next'

const DefaultLayout = (): JSX.Element => {
  const { t } = useTranslation()

  const title = useMemo(() => t('header.title'), [t])

  return (
      <div className={s.default}>
          <Header title={title}/>
          <main className={s.default__main}>
              <Outlet/>
          </main>
          <footer className={s.default__footer}>
              <h1>Footer</h1>
          </footer>
      </div>
  )
}

export default observer(DefaultLayout)
