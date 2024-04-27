import { JSX } from 'react'
import { observer } from 'mobx-react-lite'

import s from './styles.module.scss'

interface IProps {
  title: string
}

export const Header = ({
  title = ''
}: IProps): JSX.Element => {
  return <header className={s.header}>{title && <h1>{title}</h1>}</header>
}

export default observer(Header)
