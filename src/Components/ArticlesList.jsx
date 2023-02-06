import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api.js";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticles(articles);
    });
  });

  return (
    <section>
      <ul>
        {articles.map((article) => (
          <p key={article.article_id}>{article.title}</p>
        ))}
      </ul>
    </section>
  );
}
