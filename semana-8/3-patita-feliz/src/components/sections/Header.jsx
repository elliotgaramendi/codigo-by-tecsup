const Header = ({ company }) => {
  const { name, slogan } = company;
  return (
    <header className="header container py-3">
      <h2 className="header__name">{name}</h2>
      <h1 className="header__slogan">{slogan}</h1>
    </header>
  );
};

export default Header;