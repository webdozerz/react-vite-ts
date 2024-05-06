import { JSX, useState, useRef } from 'react'

import s from './styles.module.scss'

import Button from '~/components/Base/Button'

const Home = (): JSX.Element => {
  const [content, setContent] = useState<string>('Hello, World!')
  const array = ['Item 1', 'Item 2', 'Item 3']
  const inputRef = useRef<HTMLInputElement>(null)

  function handleClick (): void {
    setContent('Bye, World!')
  }

  return (
      <div className={s.home}>
          <h1>Home</h1>
          <Button onClick={handleClick}>
              Click me
          </Button>
          <br/>
          <p>{content}</p>
          <br/>
          <ul>
              {array.map((item) => (
                  <li key={item}>{item}</li>
              ))}
          </ul>
          <br/>
          <h3>Input: {inputRef.current?.value}</h3>
          <input
              ref={inputRef}
              type="text"
              style={{ width: '200px' }}
          />
      </div>
  )
}

export default Home
