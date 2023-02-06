import ArticlesList from "./Components/ArticlesList";
import Nav from "./Components/NavBar";
import HomePage from "./Components/HomePage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesList />} />
      </Routes>
    </div>
  );
}

export default App;
