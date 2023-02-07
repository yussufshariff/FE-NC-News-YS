import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SingleArticle() {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://ys-back-end-news-project.onrender.com/api/articles/${article_id}`
      )
      .then(({ data: { articles } }) => {
        setArticle(articles);
      });
  }, [article_id]);

  console.log(article);

  return (
    <section key={article.article_id}>
      <h3>{article.title}</h3>
      <h4> Written by {article.author}</h4>
      <p>{article.body}</p>
      <img src={article.article_img_url} alt={article.title}></img>
      <p>Comments: {article.comment_count}</p>
      <p> Date - {article.created_at?.replace(/-/g, "/").slice(0, 10)}</p>
      <p> Time - {article.created_at?.slice(11, 16)}</p>
    </section>
  );
}
