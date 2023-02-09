import { useState } from "react";
import { postComment } from "../utils/api";
import { Card, Form, Button, FormControl, FormLabel } from "react-bootstrap";

export default function PostingComments({ article_id }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, newComment, "grumpy19");
    setNewComment("");
    console.log(newComment);
  };

  return (
    <Card.Footer>
      <Form onSubmit={handleSubmit}>
        <FormLabel>Post a comment here: </FormLabel>
        <FormControl
          as="textarea"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Card.Footer>
  );
}
