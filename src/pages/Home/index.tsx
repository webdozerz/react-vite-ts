import { JSX, useState } from 'react'

import s from './styles.module.scss'

import Button from '~/components/Base/Button'

const Home = (): JSX.Element => {
  const [content, setContent] = useState<string>('Hello, World!')

  function handleClick (): void {
    setContent('Bye, World!')
  }

  return (
    <div className={s.home}>
        <h1>Home</h1>
        <Button onClick={handleClick}>
            Click me
        </Button>
        <p>{content}</p>
    </div>
  )
}

export default Home
