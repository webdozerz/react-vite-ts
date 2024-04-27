import React, { JSX } from 'react'
import { observer } from 'mobx-react-lite'
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './configs'

import DefaultLayout from './layouts/Default'

const Home = React.lazy(async () => await import('./pages/Home'))

function App (): JSX.Element {
  return (
      <>
        <DefaultLayout>
          <Routes>
            <Route path={ROUTES.PUBLIC.HOME} element={<Home />} />
          </Routes>
        </DefaultLayout>
      </>
  )
}

export default observer(App)
