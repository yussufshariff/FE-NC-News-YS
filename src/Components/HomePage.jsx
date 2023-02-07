import HomePageCSS from "../Components/styles/HomePage.module.css";

export default function HomePage() {
  return (
    <section>
      <img
        className={HomePageCSS.image}
        src="https://cdn.dribbble.com/users/957405/screenshots/2788591/media/ee365ca8f2b9096f50998cf59b2ad794.gif"
        alt="GIF of Newspaper walking!"
      ></img>
    </section>
  );
}
