import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api.js";
import ArticlesCSS from "../Components/styles/ArticlesList.module.css";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticles(articles);
    });
  });

  return (
    <section>
      <h2 className={ArticlesCSS.ArticleH2}>All Articles</h2>
      <ul className={ArticlesCSS.ArticleUL}>
        {articles.map((article) => (
          <section key={article.article_id}>
            <p>{article.title}</p>
            <img src={article.article_img_url} alt={article.title}></img>
          </section>
        ))}
      </ul>
    </section>
  );
}
