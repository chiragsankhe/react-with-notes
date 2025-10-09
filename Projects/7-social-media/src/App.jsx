import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import Postlist from "./components/Postlist";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store";

function App() {

 const[selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar >
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ?  <Postlist></Postlist> : <CreatePost></CreatePost>
        }
        
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
