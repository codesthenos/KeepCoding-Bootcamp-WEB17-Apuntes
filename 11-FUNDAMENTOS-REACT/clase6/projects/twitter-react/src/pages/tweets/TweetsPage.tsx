// import clsx from "clsx";
// import styles from "./TweetsPage.module.css";
import { getLatestTweets } from "./service";
import { useEffect, useState } from "react";
import Button from "../../components/shared/Button";
import TweetItem from "./Tweet";
import type { Tweet } from "./types";
import "./TweetsPage.css";
import { Link } from "react-router-dom";
import Page from "../../components/layout/Page";

const EmptyList = () => (
  <div className="tweetsPage-empty">
    <p>Be the first one!</p>
    <Button $variant="primary">Create tweet</Button>
  </div>
);

function TweetsPage() {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    async function getTweets() {
      const tweets = await getLatestTweets();
      setTweets(tweets);
    }
    getTweets();
  }, []);

  return (
    // <div className={clsx("TweetsPage", { green })}>
    <Page title="What are you thinking?">
      <div className="tweetsPage">
        {tweets.length ? (
          <ul>
            {tweets.map((tweet) => (
              <li key={tweet.id}>
                <Link to={`/tweets/${tweet.id}`}>
                  <TweetItem tweet={tweet} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </Page>
  );
}

export default TweetsPage;
