import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { fetchPosts } from "./features/postSlice";
import { fetchUsers } from "./features/usersSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<Root />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
