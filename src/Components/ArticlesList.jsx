import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api.js";
import ArticlesCSS from "../Components/styles/ArticlesList.module.css";
import { useParams } from "react-router";
import axios from "axios";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    if (!topic) {
      getAllArticles().then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      });
    } else {
      axios
        .get(
          `https://ys-back-end-news-project.onrender.com/api/articles?topic=${topic}`
        )
        .then(({ data: { articles } }) => {
          setArticles(articles);
          setIsLoading(false);
        });
    }
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
      {topic ? (
        <h2 className={ArticlesCSS.ArticleH2}>
          {topic.charAt(0).toUpperCase() + topic.slice(1)} Articles
        </h2>
      ) : (
        <h2 className={ArticlesCSS.ArticleH2}>All Articles</h2>
      )}

      <Row>
        {articles.map((article) => {
          return (
            <Col className="col-md-3">
              <Card key={article.article_id}>
                <Card.Img variant="top" src={article.article_img_url} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text> Written by : {article.author}</Card.Text>
                  <Link to={`/articles/${article.article_id}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}
