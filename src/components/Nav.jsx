import React from "react";

const Nav = () => {
  const navElement = React.createRef();
  window.addEventListener("scroll", () => {
    const navbarDark = "nav--dark";
    window.scrollY > 0
      ? navElement.current.classList.add(navbarDark)
      : navElement.current.classList.remove(navbarDark);
  });
  return (
    <nav id="nav" className="nav" ref={navElement}>
      <div className="nav-wrapper container">
        <ul className="nav-list">
          <li className="nav-list-item" data-scroll-nav="1">
            <a>Projects</a>
          </li>
          <li className="nav-list-item" data-scroll-nav="2">
            <a>About</a>
          </li>
          <li className="nav-list-item" data-scroll-nav="3">
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
