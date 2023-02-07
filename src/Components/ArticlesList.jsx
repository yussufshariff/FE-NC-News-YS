import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api.js";
import ArticlesCSS from "../Components/styles/ArticlesList.module.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

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
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Sort by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/">Date</Dropdown.Item>
          <Dropdown.Item href="#/">Author</Dropdown.Item>
          <Dropdown.Item href="#/">Placeholder</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Row>
        {articles.map((article) => {
          return (
            <Col className="col-3">
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
