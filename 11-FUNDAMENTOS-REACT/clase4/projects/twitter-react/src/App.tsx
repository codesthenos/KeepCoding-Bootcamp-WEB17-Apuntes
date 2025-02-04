import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import TweetsPage from './pages/tweets/TweetsPage'
import TweetPage from './pages/tweets/TweetPage'
import Layout from './components/layaout/Layout'
// import NewTweetPage from './pages/tweets/NewTweetPage'
// import RequireAuth from './pages/auth/RequireAuth'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />

      <Route
        path='/tweets'
        element={
          <div className='container'>
            <h2>Parent Route</h2>
            <Layout>
              <Outlet />
            </Layout>
          </div>
        }
      >
        <Route index element={<TweetsPage />} />
        <Route path=':tweetId' element={<TweetPage />} />
        {/* <Route path='new' element={<RequireAuth><NewTweetPage /></RequireAuth>} /> */}
      </Route>

      <Route path='/' element={<Navigate to='/tweets' />} />
      <Route path='/404' element={<h1>404 | Not Found</h1>} />
      <Route path='*' element={<Navigate to='/404' />} />
    </Routes>
  )
}

export default App
