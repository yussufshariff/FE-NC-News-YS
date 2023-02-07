import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleArticleCSS from "../Components/styles/SingleArticle.module.css";
import { getArticleById } from "../utils/api";

export default function SingleArticle() {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <section key={article.article_id} className={SingleArticleCSS.single}>
      <h3>{article.title}</h3>
      <h4> Written by {article.author}</h4>
      <p>{article.body}</p>
      <p>Comments: {article.comment_count}</p>
      <p> Date - {article.created_at?.replace(/-/g, "/").slice(0, 10)}</p>
      <p> Time - {article.created_at?.slice(11, 16)}</p>
      <img src={article.article_img_url} alt={article.title}></img>
    </section>
  );
}
