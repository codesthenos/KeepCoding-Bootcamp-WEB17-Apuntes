import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import RequireAuth from "./pages/auth/RequireAuth";
import Layout from "./components/layout/Layout";
import ErrorBoundary from "./components/errors/ErrorBoundary";

const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
const NewTweetPage = lazy(() => import("./pages/tweets/NewTweetPage"));
const TweetsPage = lazy(() => import("./pages/tweets/TweetsPage"));
const TweetPage = lazy(() => import("./pages/tweets/TweetPage"));

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<h2>LOADING...</h2>}>
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
            <ErrorBoundary>
              <Suspense fallback={<h2>LOADING...</h2>}>
                <TweetsPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path=":tweetId"
          element={
            <Suspense fallback={<h2>LOADING...</h2>}>
              <TweetPage />
            </Suspense>
          }
        />
        <Route
          path="new"
          element={
            <RequireAuth>
              <Suspense fallback={<h2>LOADING...</h2>}>
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
  );
}

export default App;
