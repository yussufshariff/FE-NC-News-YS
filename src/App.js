import ArticlesList from "./Components/ArticlesList";
import HomePage from "./Components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SingleArticle from "./Components/SingleArticle";
import Users from "./Components/Users";
import "../src/Components/styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/topics/:topic" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="*" element={<p>404 not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
