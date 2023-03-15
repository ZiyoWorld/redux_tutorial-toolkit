// import Counter from "../components/Counter";
import AddPostForm from "../components/posts/AddPostForm";
import PostList from "../components/posts/PostList";

const Root = () => {
  return (
    <main className="App">
      {/* <Counter /> */}
      <AddPostForm />
      <PostList />
    </main>
  );
};

export default Root;
