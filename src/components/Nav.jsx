import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.navElement = React.createRef();
    this.setScrollHandler = this.setScrollHandler.bind(this);
    this.scrollToElement = this.scrollToElement.bind(this);
    this.scrollHandler = null;
    this.state = {
      links: [
        {
          linkText: "Projects",
          scrollTarget: "projects",
          isActive: false
        },
        {
          linkText: "About",
          scrollTarget: "about",
          isActive: false
        },
        {
          linkText: "Contact",
          scrollTarget: "contact",
          isActive: false
        }
      ]
    };
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
      const links = this.state.links.map((link, index, linksArr) => {
        const scrollTarget = document.getElementById(link.scrollTarget);
        const offset = scrollTarget ? scrollTarget.offsetTop : 0;
        if (index !== linksArr.length - 1) {
          const nextScrollTarget = document.getElementById(
            linksArr[index + 1].scrollTarget
          );
          const nextOffset = nextScrollTarget ? nextScrollTarget.offsetTop : 0;
          console.log("nexoffset", nextOffset);
          window.scrollY >= offset && window.scrollY < nextOffset
            ? (link.isActive = true)
            : (link.isActive = false);
        } else {
          window.scrollY >= offset
            ? (link.isActive = true)
            : (link.isActive = false);
        }
        return link;
      });
      this.setState(() => ({ links }));
    });
  }
  scrollToElement(scrollTargetSelector) {
    const offset = document.getElementById(scrollTargetSelector).offsetTop || 0;
    if (offset) {
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
    const links = this.state.links.map(link => {
      link.srollTarget === scrollTargetSelector
        ? (link.isActive = true)
        : (link.isActive = false);
      return link;
    });

    this.setState(() => ({ links }));
  }
  createLinks() {
    return this.state.links.map((link, index) => (
      <li
        onClick={() => {
          this.scrollToElement(link.scrollTarget);
        }}
        className={`nav-list-item ${link.isActive ? "active" : ""}`}
        key={index}
      >
        <a>{link.linkText}</a>
      </li>
    ));
  }
  render() {
    return (
      <nav id="nav" className="nav" ref={this.navElement}>
        <div className="nav-wrapper container">
          <ul className="nav-list">{this.createLinks()}</ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
