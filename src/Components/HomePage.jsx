import HomePageCSS from "../Components/styles/HomePage.module.css";
import { useGlitch } from "react-powerglitch";
import { Button } from "react-bootstrap";

export default function HomePage() {
  const glitch = useGlitch({ glitchTimeSpan: false });
  return (
    <section className={HomePageCSS.test}>
      {glitch.stopGlitch()}
      <h1 ref={glitch.ref}>Placeholder...⚡⚡ </h1>
      <section className={HomePageCSS.btn}>
        <Button onClick={glitch.startGlitch}>Start</Button>
        <Button onClick={glitch.stopGlitch}>Stop</Button>
      </section>
      <img
        className={HomePageCSS.image}
        src="https://cdn.dribbble.com/users/957405/screenshots/2788591/media/ee365ca8f2b9096f50998cf59b2ad794.gif"
        alt="GIF of Newspaper walking!"
      ></img>
    </section>
  );
}
