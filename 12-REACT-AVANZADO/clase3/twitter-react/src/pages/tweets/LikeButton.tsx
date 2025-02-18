import clsx from "clsx";

import LikedIcon from "../../components/icons/Liked";
import NotLikedIcon from "../../components/icons/NotLiked";
import "./LikeButton.css";

interface Props {
  likes: number;
  isLiked?: boolean;
  onLike: () => void;
}

const LikeButton = ({ likes, isLiked, onLike }: Props) => {
  const Icon = isLiked ? LikedIcon : NotLikedIcon;

  return (
    <div
      role="button"
      className={clsx("likeButton", {
        "likeButton--active": isLiked,
      })}
      onClick={onLike}
    >
      <span className="likeButton-icon">
        <Icon width="20" height="20" />
      </span>
      <span className="likeButton-label">{likes}</span>
    </div>
  );
};

export default LikeButton;
