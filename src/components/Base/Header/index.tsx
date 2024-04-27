import { JSX, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '~/configs'

import s from './styles.module.scss'
import { useTranslation } from 'react-i18next'

interface IProps {
  title: string
}

const Link = ({
  path = '',
  title = '',
  className = ''
}: {
  path: string
  title: string
  className?: string
}): JSX.Element => {
  return <NavLink to={path} className={className}>{title}</NavLink>
}

export const Header = ({
  title = ''
}: IProps): JSX.Element => {
  const { t } = useTranslation()

  const navLinks = useMemo(() => [
    {
      path: ROUTES.PUBLIC.HOME,
      title: t('header.links.home')
    },
    {
      path: ROUTES.PUBLIC.ABOUT,
      title: t('header.links.about')
    }
  ], [t])

  return (
      <header className={s.header}>
        {title && <h1>{title}</h1>}
      <nav className={s.header__nav}>
        {navLinks.map(item =>
            <Link
                key={item.path}
                path={item.path}
                title={item.title}
            />
        )}
      </nav>
  </header>
  )
}

export default observer(Header)
