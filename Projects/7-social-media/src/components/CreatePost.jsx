import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const rectionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = rectionsElement.current.value;
    const tags = tagsElement.current.value
      .split(" ")
      .filter((tag) => tag.trim() !== "");

    addPost(userId, postTitle, postBody, reactions, tags);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    rectionsElement.current.value = "";
    tagsElement.current.value = "";
  };
  return (
    <form className="creatpost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userID here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="userPost"
          placeholder="How are you Feeling today..."
        />
      </div>

      <div className="mb-4">
        <label htmlFor="postContent" className="form-label">
          Post content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
          style={{ height: "90px" }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of Rections
        </label>
        <input
          type="text"
          ref={rectionsElement}
          className="form-control"
          id="userId"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="hashtag" className="form-label">
          Enter your hasttags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="please enter tages using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
