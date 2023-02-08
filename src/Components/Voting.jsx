import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Voting({ votes }) {
  const [vote, setVote] = useState(0);

  const incVote = () => {
    setVote((currChange) => {
      return currChange + 1;
    });
  };

  const decVote = () => {
    setVote((currChange) => {
      return currChange - 1;
    });
  };

  return (
    <section>
      <Button onClick={() => incVote()}>👍</Button>
      <span>{votes + vote} votes</span>
      <Button onClick={() => decVote()}>👎</Button>
    </section>
  );
}
