import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import { useParams } from "react-router";

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
}
