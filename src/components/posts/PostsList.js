import { useSelector, useDispatch } from "react-redux";
import { postsDelete, selectAllPosts } from "../../features/postSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const dispatch = useDispatch();

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
      <div className="distance">
        <button
          className="ondelete"
          onClick={() => dispatch(postsDelete(post.id))}
        >
          Delete
        </button>

        {/* <button
          className="ondelete"
          onClick={() => dispatch(postUpdated(post.id))}
        >
          Update
        </button> */}
      </div>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
export default PostsList;
