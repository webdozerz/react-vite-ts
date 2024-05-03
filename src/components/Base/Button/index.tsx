import { observer } from 'mobx-react-lite'
import React from 'react'

import s from './styles.module.scss'

interface IProps {
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: IProps): JSX.Element => {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default observer(Button)
