import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api.js";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import HomePageCSS from "../Components/styles/HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllArticles()
      .then((articles) => {
        setArticles(articles[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

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
      <h1 className="main-title">NC News!</h1>
      <section className="main-home"></section>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/6424586/pexels-photo-6424586.jpeg?w=700&h=700"
          />

          <Card.Body>
            <Link to={`/topics/coding`}>
              <Card.Title>Coding</Card.Title>
            </Link>
            <Card.Text>Articles related to Coding</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?w=700&h=700"
          />
          <Card.Body>
            <Link to={`/topics/football`}>
              <Card.Title>Football</Card.Title>
            </Link>
            <Card.Text>Articles related to Football</Card.Text>
          </Card.Body>

          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700"
          />
          <Card.Body>
            <Link to={`/topics/cooking`}>
              <Card.Title>Cooking</Card.Title>
            </Link>

            <Card.Text>Articles related to Cooking</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </section>
  );
}
