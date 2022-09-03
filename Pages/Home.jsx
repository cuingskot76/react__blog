import React from "react";
import Feed from "../Feed";

function Home({ posts, error, loading, search, setSearch }) {
  return (
    <div className="py-8">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">search post</label>
        <input
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {error && <p>{error.message}</p>}
      {loading && <p>Loading ...</p>}
      {posts.length > 0 ? <Feed posts={posts} /> : <p>No post to display</p>}
    </div>
  );
}

export default Home;
