import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import TweetsPage from './pages/tweets/TweetsPage'
import TweetPage from './pages/tweets/TweetPage'
// import NewTweetPage from './pages/tweets/NewTweetPage'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />

      <Route
        path='/tweets'
        element={
          <div className='container'>
            <h2>Parent Route</h2>
            <Outlet />
          </div>
        }
      >
        <Route index element={<TweetsPage />} />
        <Route path=':tweetId' element={<TweetPage />} />
        {/* <Route path='new' element={<NewTweetPage />} /> */}
      </Route>

      <Route path='/' element={<Navigate to='/tweets' />} />
      <Route path='/404' element={<h1>404 | Not Found</h1>} />
      <Route path='*' element={<Navigate to='/404' />} />
    </Routes>
  )
}

export default App
