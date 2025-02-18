import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import TweetsPage from "./pages/tweets/TweetsPage";
import TweetPage from "./pages/tweets/TweetPage";
import RequireAuth from "./pages/auth/RequireAuth";
import Layout from "./components/layout/Layout";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/errors/ErrorBoundary";

const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
const NewTweetPage = lazy(() => import("./pages/tweets/NewTweetPage"));

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="/tweets"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route
            index
            element={
              <ErrorBoundary fallback={<div>Oooops</div>}>
                <TweetsPage />
              </ErrorBoundary>
            }
          />
          <Route path=":tweetId" element={<TweetPage />} />
          <Route
            path="new"
            element={
              <RequireAuth>
                <Suspense fallback={<div>Loading...</div>}>
                  <NewTweetPage />
                </Suspense>
              </RequireAuth>
            }
          />
        </Route>

        <Route path="/" element={<Navigate to="/tweets" />} />
        <Route path="/404" element={<div>404 | Not Found</div>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
