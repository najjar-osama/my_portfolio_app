import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.navElement = React.createRef();
    this.setScrollHandler = this.setScrollHandler.bind(this);
    this.scrollToElement = this.scrollToElement.bind(this);
    this.scrollHandler = null;
  }
  componentDidMount() {
    this.setScrollHandler();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }
  setScrollHandler() {
    this.scrollHandler = window.addEventListener("scroll", () => {
      const navbarDark = "nav--dark";
      window.scrollY > 0
        ? this.navElement.current.classList.add(navbarDark)
        : this.navElement.current.classList.remove(navbarDark);
    });
  }
  scrollToElement(e) {
    let target = e.nativeEvent.target;
    target.tagName === "A" ? (target = target.parentElement) : target;
    const scrollTargetSelector = target.dataset.scrollto;
    const offset = document.getElementById(scrollTargetSelector).offsetTop || 0;
    if (offset) {
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  }
  render() {
    return (
      <nav id="nav" className="nav" ref={this.navElement}>
        <div className="nav-wrapper container">
          <ul className="nav-list">
            <li
              onClick={this.scrollToElement}
              className="nav-list-item"
              data-scrollto="projects"
            >
              <a>Projects</a>
            </li>
            <li
              onClick={this.scrollToElement}
              className="nav-list-item"
              data-scrollto="about"
            >
              <a>About</a>
            </li>
            <li
              onClick={this.scrollToElement}
              className="nav-list-item"
              data-scrollto="contact"
            >
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
