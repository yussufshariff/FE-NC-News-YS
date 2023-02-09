import { useState } from "react";
import { Button } from "react-bootstrap";
import { patchArticle } from "../utils/api";

export default function Voting({ votes, article_id }) {
  const [vote, setVote] = useState(0);
  const [alerts, setAlerts] = useState(false);

  const incVote = () => {
    setVote((currChange) => {
      patchArticle(article_id, 1);
      return currChange + 1;
    });
  };

  const decVote = () => {
    setVote((currChange) => {
      patchArticle(article_id, -1);

      return currChange - 1;
    });
  };

  if (alerts) {
    return (
      <div class="alert alert-success" role="alert">
        Thanks for voting!
      </div>
    );
  }

  return (
    <section>
      <Button
        className="btn btn-success"
        disabled={vote === 1}
        onClick={() => {
          incVote();
          setAlerts(true);
        }}
      >
        👍
      </Button>

      <span className="votes">{votes + vote} votes</span>
      <Button
        className="btn btn-danger"
        disabled={vote === -1}
        onClick={() => {
          decVote();
          setAlerts(true);
        }}
      >
        👎
      </Button>
    </section>
  );
}
