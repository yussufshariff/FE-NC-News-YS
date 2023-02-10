import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import ArticlesCSS from "../Components/styles/ArticlesList.module.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  const [sortBy, setSortBy] = useState("title");
  const [orderBy, setOrderBy] = useState("asc");

  useEffect(() => {
    getAllArticles(topic, sortBy, orderBy).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, sortBy, orderBy]);

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <section>
      <section>
        <p>Sort By:</p>
        <button onClick={() => setSortBy("created_at")}>Date</button>
        <button onClick={() => setSortBy("comment_count")}>Comments</button>
        <button onClick={() => setSortBy("votes")}>Votes</button>
        <p>Order by: </p>
        <button onClick={() => setOrderBy("desc")}>Descending</button>
        <button onClick={() => setOrderBy("asc")}>Ascending</button>
      </section>
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
            <Col className="col-md-3" key={article.article_id}>
              <Card>
                <Card.Img variant="top" src={article.article_img_url} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text> Written by : {article.author}</Card.Text>
                  <Link to={`/articles/${article.article_id}`}>
                    <small className="text-muted">
                      {article.created_at?.replace(/-/g, "/").slice(0, 10)}
                    </small>
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
