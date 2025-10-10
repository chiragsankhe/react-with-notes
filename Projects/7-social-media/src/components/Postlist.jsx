import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const Postlist = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState();

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}

      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default Postlist;
