function Header() {

    return (
      <header className="header">
        <h1 className="header_title">Las frases más famosas de</h1>
        <figure>
          <img
            className="header__img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/2560px-Friends_logo.svg.png"
            alt=""
          />
        </figure>
      </header>
    );
}

export default Header;