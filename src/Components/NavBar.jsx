import NavCSS from "../Components/styles/NavBar.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={NavCSS.navBarUl}>
        <li className={NavCSS.navBarLi}>
          <a href="/">Home</a>
          <a href="/test1">Topic 1</a>
          <a href="/test2">Topic 2 </a>
          <a href="/test3">Topic 3</a>
        </li>
      </ul>
    </nav>
  );
}
