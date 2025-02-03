import clsx from 'clsx'
import './TweetsPage.css'
import Button from '../../components/Button'
import { useEffect, useState } from 'react'
import { getLatestTweets } from './service'
import type { Tweet, variant } from './types'
import { logout } from '../auth/service'
import Layout from '../../components/layaout/Layout'
import { useAuth } from '../auth/context'
import { Link } from 'react-router-dom'

const condition = true

function TweetsPage() {
  const { onLogout } = useAuth()
  const [variant1, setVariant1] = useState<variant>('primary')
  const [variant2, setVariant2] = useState<variant>('secondary')

  const [tweets, setTweets] = useState<Tweet[]>([])

  useEffect(() => {
    getLatestTweets().then((res) => {
      setTweets(res)
    })
  }, [])

  const handleLogoutButton = async () => {
    await logout()
    onLogout()
  }

  return (
    <Layout title='What are you thinking?'>
      <div className='TweetsPage'>
        <h1 className='p-4 font-sans text-3xl font-bold'>Tweets Page</h1>
        <ul className={clsx('TweetsPage', { green: condition })}>
          {tweets.map((tweet) => {
            return (
              <li key={tweet.id}>
                <Link to={`/tweets/${tweet.id}`}>
                  <h3>{tweet.updatedAt.split('T')[0]}</h3>
                  <p>{tweet.content}</p>
                </Link>
              </li>
            )
          })}
        </ul>
        <Button
          onClick={() => {
            setVariant1((prev) => {
              return prev === 'primary' ? 'secondary' : 'primary'
            })
          }}
          $variant={variant1}
        >
          Click me
        </Button>
        <Button
          onClick={() => {
            setVariant2((prev) => {
              return prev === 'secondary' ? 'primary' : 'secondary'
            })
          }}
          $variant={variant2}
        >
          Click me
        </Button>
        <Button $variant='primary' onClick={handleLogoutButton}>
          Logout
        </Button>
      </div>
    </Layout>
  )
}

export default TweetsPage
