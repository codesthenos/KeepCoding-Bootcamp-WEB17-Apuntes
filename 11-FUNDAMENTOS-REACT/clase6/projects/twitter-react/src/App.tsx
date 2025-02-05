import LoginPage from "./pages/auth/LoginPage";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import TweetsPage from "./pages/tweets/TweetsPage";
import NewTweetPage from "./pages/tweets/NewTweetPage";
import TweetPage from "./pages/tweets/TweetPage";
import RequireAuth from "./pages/auth/RequireAuth";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/tweets"
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index element={<TweetsPage />} />
        <Route path=":tweetId" element={<TweetPage />} />
        <Route
          path="new"
          element={
            <RequireAuth>
              <NewTweetPage />
            </RequireAuth>
          }
        />
      </Route>

      <Route path="/" element={<Navigate to="/tweets" />} />
      <Route path="/404" element={<div>404 | Not Found</div>} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
