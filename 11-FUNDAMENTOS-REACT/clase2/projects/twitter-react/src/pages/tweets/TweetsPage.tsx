import clsx from 'clsx'
import './TweetsPage.css'
import Button from '../../components/Button'
import { useState } from 'react'

const tweets = [
  {
    content:
      "Nos hace mucha ilusión anunciar la fecha del ESTRENO de 'Eso que tu me das', documental con la última entrevista a Pau Donés. 30 DE SEPTIEMBRE, en cines de toda España. @WarnerBrosSpain Y este es el cartel definitivo, con algunas frases de críticas que ya se han publicado.",
    userId: 1,
    updatedAt: '2021-03-15T18:23:57.579Z',
    id: 1
  },
  {
    content:
      "'Soy muy fan tuya, pero ahora no me acuerdo cómo te llamas' (Una desconocida, en la calle).",
    userId: 1,
    updatedAt: '2021-03-15T18:24:56.773Z',
    id: 2
  }
]
const condition = true

type variant = 'primary' | 'secondary'

function TweetsPage() {
  const [variant1, setVariant1] = useState<variant>('primary')
  const [variant2, setVariant2] = useState<variant>('secondary')

  return (
    <div className='TweetsPage'>
      <h1 className='p-4 font-sans text-3xl font-bold'>Tweets Page</h1>
      <ul className={clsx('TweetsPage', { green: condition })}>
        {tweets.map((tweet) => {
          return (
            <li key={tweet.id}>
              <h3>{tweet.updatedAt.split('T')[0]}</h3>
              <p>{tweet.content}</p>
            </li>
          )
        })}
      </ul>
      <Button onClick={() => {
        setVariant1(prev => {
          return prev === 'primary' ? 'secondary' : 'primary'
        })
      }} variant={variant1}>Click me</Button>
      <Button onClick={() => {
        setVariant2(prev => {
          return prev === 'secondary' ? 'primary' : 'secondary'
        })
      }} variant={variant2}>Click me</Button>
    </div>
  )
}

export default TweetsPage
