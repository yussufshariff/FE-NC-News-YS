import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import { useParams } from "react-router";
import { Form, Button, ListGroup } from "react-bootstrap";

export default function Comments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((comment) => {
      setComments(comment);
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
    <ListGroup>
      {comments.map((comment) => (
        <ListGroup.Item key={comment.id}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{comment.author}</h5>
            <small className="text-muted">
              {comment.created_at?.slice(11, 16)}
              <br />
              {comment.created_at?.replace(/-/g, "/").slice(0, 10)}
            </small>
          </div>
          <p className="mb-1">{comment.body}</p>
          <small className="text-muted">Votes: {comment.votes}</small>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
