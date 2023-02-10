import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById } from "../utils/api";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

import Comments from "./Comments";
import Voting from "./Voting";

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
    <Container>
      <Row className="my-5">
        <Col xs={12}>
          <Card>
            <Card.Header>
              <Card.Title>{article.title}</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>{article.body}</Card.Text>
              <Voting votes={article.votes} article_id={article_id} />
              {/* <Card.Img variant="top" src={article.article_img_url} /> */}
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Date Created -{" "}
                {article.created_at?.replace(/-/g, "/").slice(0, 10)}
              </small>
              <Card.Text> Written by {article.author}</Card.Text>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row className="my-5">
        <Col xs={12}>
          <Card>
            <Card.Header>
              <Card.Title>Comments</Card.Title>
            </Card.Header>
            <ListGroup variant="flush">
              <Comments />
              <ListGroup.Item>
                <br />
                <small className="text-muted">{}</small>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
