/* eslint-disable react/prop-types */
const Header = ({ data }) => {
  const { title, subtitle } = data;
  return (
    <header className="py-3 text-center">
      <div className="container">
        <h1 className="fs-4">{title}</h1>
        <h2 className="fs-6">{subtitle}</h2>
      </div>
    </header>
  );
};

export default Header;