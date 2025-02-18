import { formatDistanceToNow } from "date-fns";

// import LikeButton from "./LikeButton";
// import Photo from "../../../components/shared/Photo";
import "./Tweet.css";
import type { Tweet } from "./types";
import LikeButton from "./LikeButton";
import Photo from "../../components/shared/Photo";

interface Props {
  tweet: Tweet;
}

const Tweet = ({ tweet }: Props) => {
  const { user, updatedAt, content, likes } = tweet;
  return (
    <article className="tweet">
      <div>
        <Photo className="tweet-photo" />
      </div>
      <div className="right">
        <div className="tweet-header">
          <span className="tweet-name">{user.name}</span>
          <span className="tweet-username">{user.username}</span>
          <span className="tweet-separator">·</span>
          <time dateTime={updatedAt}>
            {formatDistanceToNow(new Date(updatedAt))}
          </time>
        </div>
        <div>
          {content}
          <div className="tweet-actions">
            <LikeButton
              onLike={() => console.log("Click on like")}
              likes={likes.length}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Tweet;
