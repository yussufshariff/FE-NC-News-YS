import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import ArticlesCSS from "../Components/styles/ArticlesList.module.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import dayjs from "dayjs";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  const [sortBy, setSortBy] = useState("title");
  const [orderBy, setOrderBy] = useState("asc");
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllArticles(topic, sortBy, orderBy)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [topic, sortBy, orderBy]);

  if (error) {
    return (
      <div>
        <h3>Error...</h3>
      </div>
    );
  }

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
      <section>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            Sort by
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item onClick={() => setSortBy("created_at")}>
              Date
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortBy("comment_count")}>
              Comments
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortBy("votes")}>
              Votes
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => setOrderBy("asc")}>
              Ascending
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setOrderBy("desc")}>
              Descending
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>

      <Row>
        {articles.map((article) => {
          const date = dayjs(article.created_at).format("MMMM D, YYYY");
          return (
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="bottom" src={article.article_img_url} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <ListGroup.Item>Written by {article.author}</ListGroup.Item>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  {article.comment_count} {""}💬
                </ListGroup.Item>
                <ListGroup.Item>{date}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to={`/articles/${article.article_id}`}>
                  <Button variant="primary">Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </section>
  );
}
