import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");

  const startsForm = latest ? 80 : 1;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Blog Page</h1>
      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <Link to="/posts/new">Add new post</Link>
      {posts
        .filter(
          (post) => post.title.includes(postQuery) && post.id >= startsForm
        )
        .map((post) => (
          <Link key={post.id} to={`${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
    </div>
  );
};

export default BlogPage;
