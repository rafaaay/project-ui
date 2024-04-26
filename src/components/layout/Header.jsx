function Header() {

  const openMenu = () => {
    const mobileMenu = document.querySelector(".header__right");
    mobileMenu.classList.add("open");
  }

  const closeMenu = () => {
    const mobileMenu = document.querySelector(".header__right");
    mobileMenu.classList.remove("open");
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__left">
          <div className="header__logo">
            <img src="/images/logo.svg"></img>
          </div>

          <div className="mobile-btns hidden-desktop">
            <button className="btn btn--teal">Get in Touch</button>

            <button onClick={openMenu} className="btn-open" aria-label="open menu">
                <img src="/images/icons/icon_hamburger.svg" alt="open button"></img>
            </button>
          </div>
        </div>

        <div className="header__right">

          {/* only visible on mobile and tablet */}
          <div className="header__mobile-header">
            <div className="header__logo">
              <img src="/images/logo.svg"></img>
            </div>

            <button onClick={closeMenu} className="btn-close" aria-label="close menu">
              <img src="/images/icons/icon_close.svg" alt="close button"></img>
            </button>
          </div>
          {/* only visible on mobile and tablet */}

          <nav className="header__nav">
            <a href="#">Why Stellar</a>
            <a href="#">Features</a>
            <a href="#">How it Works</a>
            <a href="#">Integrations</a>
            <a href="#">Resources</a>
            <a href="#">Login</a>
          </nav>

          <button className="btn btn--teal hidden-mobile">Get in Touch</button>
          <button className="btn btn--teal hidden-desktop">Book a Demo</button>
        </div>
      </div>
    </header>
  )
}

export default Header
