const Header = ({ company }) => {
  const { name, slogan } = company;
  return (
    <header className="header">
      <h2 className="header__name">{name}</h2>
      <h1>{slogan}</h1>
    </header>
  );
};

export default Header;