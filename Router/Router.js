import React, { useEffect, useState } from "react";
import UseAsync from "../Hook/UseAsync";

import { BrowserRouter, useNavigate, Route, Routes } from "react-router-dom";
import Header from "../Header";

// id
import { v4 as uuidv4 } from "uuid";

// date
import { format } from "date-fns";

import Home from "../Pages/Home";
import PostPage from "../PostPage";
import NewPost from "../Pages/NewPost";

function Router() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchResult, setsearchResult] = useState([]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const Navigate = useNavigate();

  const URL_API = "http://localhost:3004/blogs/";

  // const [newPost, setNewPost] = useState({
  //   id: uuidv4(),
  //   date: format(new Date(), "MMMM dd, yyyy pp"),
  //   title: title,
  //   body: body,
  // });

  const fetchApi = async () => {
    try {
      const res = await UseAsync(`${URL_API}`);
      const data = await res.json();
      if (!res.ok) throw Error("Error : Cannot fetch the Api's");

      setLoading(false);

      setPosts(data);
    } catch (error) {
      setError(error);
    }
  };

  console.log(search);

  useEffect(() => {
    fetchApi();

    const filteredPosts = posts.filter((post) =>
      post?.title?.toLowerCase()?.includes(search.toLowerCase())
    );

    setsearchResult(filteredPosts.reverse());
  }, [posts, search]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const id = uuidv4();
    const date = format(new Date(), "MMMM dd, yyyy pp");

    try {
      const res = await UseAsync(`${URL_API}`, {
        method: "POST",
        body: JSON.stringify({
          id: id,
          date: date,
          title: title,
          body: body,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPosts([...posts, { res }]);

      fetchApi();

      setTitle("");
      setBody("");

      Navigate("/");
    } catch (error) {}
  };

  const onDeleteHandler = async (id) => {
    try {
      const res = await UseAsync(`${URL_API}${id}`, {
        method: "DELETE",
      });
      setPosts([...posts, { res }]);
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            posts={searchResult}
            error={error}
            setError={setError}
            loading={loading}
            search={search}
            setSearch={setSearch}
          />
        }
      ></Route>
      <Route
        path="/post/:id"
        element={<PostPage posts={posts} onDeleteHandler={onDeleteHandler} />}
      ></Route>
      <Route
        path="/new-post"
        element={
          <NewPost
            onSubmitHandler={onSubmitHandler}
            title={title}
            setTitle={setTitle}
            body={body}
            setBody={setBody}
          />
        }
      ></Route>
    </Routes>
  );
}

export default Router;
