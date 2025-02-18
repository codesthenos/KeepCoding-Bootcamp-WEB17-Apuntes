import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tweet } from "./types";
import { getTweet } from "./service";
import { isApiClientError } from "../../api/client";
import Page from "../../components/layout/Page";

function TweetPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [tweet, setTweet] = useState<Tweet | null>(null);

  useEffect(() => {
    if (params.tweetId) {
      getTweet(params.tweetId)
        .then((tweet) => setTweet(tweet))
        .catch((error) => {
          if (isApiClientError(error)) {
            if (error.code === "NOT_FOUND") {
              navigate("/404");
            }
          }
        });
    }
  }, [params.tweetId, navigate]);

  return <Page title="Tweet detail">{tweet ? tweet.content : null}</Page>;
}
export default TweetPage;
