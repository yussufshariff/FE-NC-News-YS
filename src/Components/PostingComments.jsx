import { useState } from "react";
import { postComment } from "../utils/api";
import { Card, Form, Button, FormControl, FormLabel } from "react-bootstrap";
import { UserContext } from "../Contexts/userContext";
import { useContext } from "react";
export default function PostingComments({ article_id, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(true);
  const { loggedInUser } = useContext(UserContext);
  const username = loggedInUser.username;
  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, newComment, username).then((newPostedComment) => {
      setComments((currentComments) => {
        return [newPostedComment, ...currentComments];
      });
      setIsSubmitted(false);
    });
    setNewComment("");
  };

  return (
    <Card.Footer>
      <Form onSubmit={handleSubmit}>
        <FormLabel>Post a comment here: </FormLabel>
        {isSubmitted ? (
          <FormControl
            as="textarea"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        ) : (
          <div className="alert alert-primary" role="alert">
            Thanks for commenting!
          </div>
        )}
        <Button type="submit">Submit</Button>
      </Form>
    </Card.Footer>
  );
}
