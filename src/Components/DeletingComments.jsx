import { useState, useEffect } from "react";
import { deleteComment } from "../utils/api";
import { Button } from "react-bootstrap";

export default function DeletingComments({ comment_id }) {
  const [deleted, setDeleted] = useState("");

  const handleDeleteComment = () => {
    deleteComment(comment_id);
  };

  return (
    <h1>
      <Button onClick={handleDeleteComment} variant="danger">
        Delete Comment
      </Button>
    </h1>
  );
}
