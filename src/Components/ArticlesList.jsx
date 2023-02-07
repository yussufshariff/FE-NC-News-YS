import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api.js";
import ArticlesCSS from "../Components/styles/ArticlesList.module.css";
import { Link } from "react-router-dom";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  });

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <section>
      <h2 className={ArticlesCSS.ArticleH2}>All Articles</h2>
      <ul className={ArticlesCSS.ArticleUL}>
        {articles.map((article) => (
          <section key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <p>{article.title}</p>
              <img src={article.article_img_url} alt={article.title}></img>
            </Link>
          </section>
        ))}
      </ul>
    </section>
  );
}
