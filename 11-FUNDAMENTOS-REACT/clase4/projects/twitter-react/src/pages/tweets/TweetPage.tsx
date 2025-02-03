import { useParams } from 'react-router-dom'
import Header from '../../components/layaout/Header'

function TweetPage() {
  const { tweetId } = useParams()
  return (
    <>
      <Header />
      <h1>Tweet Page {tweetId}</h1>
    </>
  )
}
export default TweetPage
