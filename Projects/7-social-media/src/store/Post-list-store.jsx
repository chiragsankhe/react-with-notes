import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friends, I’m going to Mumbai for my vacation. Hope to enjoy a lot!",
    reaction: 12,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho bhai",
    body: "4 saal ki masti ke baad bhi pass ho gaya bhai! Ab party hard!",
    reaction: 34,
    userId: "user-5",
    tags: ["Enjoying", "College", "Success"],
  },
  {
    id: "3",
    title: "First React Project Deployed!",
    body: "Just deployed my first React project today! Learned a lot about hooks and context.",
    reaction: 25,
    userId: "user-12",
    tags: ["React", "Coding", "Achievement"],
  },
  {
    id: "4",
    title: "Weekend Trekking Plan",
    body: "Planning a small trekking trip this weekend with friends. Excited for the adventure!",
    reaction: 18,
    userId: "user-7",
    tags: ["Adventure", "Trekking", "Friends"],
  },
  {
    id: "5",
    title: "New Job as a React Developer!",
    body: "Super excited to share that I’ve joined SAAR IT Resource Pvt Ltd as a React Developer!",
    reaction: 45,
    userId: "user-3",
    tags: ["Career", "ReactJS", "Milestone"],
  },
];

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST'){
     newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
    }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};

  const deletePost = (postId) => {
   dispatchPostList({
    type:'DELETE_POST',
    payload:{
        postId,
    },
   })
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
