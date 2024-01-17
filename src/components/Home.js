import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList title="All blogs" blogs={blogs} />}
    </div>
  );
};

export default Home;
