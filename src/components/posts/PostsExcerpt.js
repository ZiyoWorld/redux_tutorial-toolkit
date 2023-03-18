import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const PostsExcerpt = ({ post }) => {
=======
import { useSelector } from "react-redux";
import { selectPostById } from "../../features/postSlice";

const PostsExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

>>>>>>> 76a7687fddca418b17f058aa987bcc32d67a6e5d
  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 76a7687fddca418b17f058aa987bcc32d67a6e5d
export default PostsExcerpt;
