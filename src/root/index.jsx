import React from "react";
// import { Counter } from "../components/Counter";
import PostsList from "../components/posts/PostsList";
import AddPostForm from "../components/posts/AddPostForm";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
};
export default Root;
