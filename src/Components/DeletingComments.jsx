import { useState } from "react";
import { deleteComment } from "../utils/api";
import Button from "react-bootstrap/Button";
import { UserContext } from "../Contexts/userContext";
import { useContext } from "react";

export default function DeletingComments({ comment_id, username }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  // loggedInUser.username;

  const handleDeleteComment = () => {
    deleteComment(comment_id);
  };

  if (isDeleted) {
    return (
      <div className="alert alert-success" role="alert">
        Thanks for voting!
      </div>
    );
  }

  return (
    <section>
      {loggedInUser.username === username ? (
        <Button
          className="btn btn-success"
          onClick={() => {
            handleDeleteComment();
            setIsDeleted(true);
          }}
        >
          Delete Comment
        </Button>
      ) : (
        ""
      )}
    </section>
  );
}
