import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card position-relative" style={{ width: "18rem", margin: "10px" }}>
      {/* Delete badge in corner */}
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(post.id)}
        style={{ cursor: "pointer" }}
      >
        <MdDelete size={18} />
        <span className="visually-hidden">Delete post</span>
      </span>

      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge text-bg-primary hashtag"
            style={{ marginRight: "5px" }}
          >
            #{tag}
          </span>
        ))}

        <div className="alert alert-success post-alert mt-3" role="alert">
          This post has been reacted by {post.reaction} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
