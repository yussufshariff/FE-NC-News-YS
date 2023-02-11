import ArticlesList from "./Components/ArticlesList";
import HomePage from "./Components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SingleArticle from "./Components/SingleArticle";
import Users from "./Components/Users";
import "../src/Components/styles/App.css";
import { UserContext } from "./Contexts/userContext";
import { useContext, useEffect, useState } from "react";

function App() {
  const userValue = useContext(UserContext);
  const [mainUser, setMainUser] = useState({});
  useEffect(() => {
    setMainUser(userValue);
    console.log(mainUser);
  });

  return (
    <div className="App">
      <NavBar user={mainUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/topics/:topic" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
