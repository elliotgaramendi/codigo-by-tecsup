const Footer = ({ currentDateYear, author }) => {
  return (
    <footer className="footer">
      <h2 className="footer__footer">🦄Copyright &copy; {currentDateYear} {author}. Todos los derechos reservados.🦄</h2>
    </footer>
  );
};

export default Footer;