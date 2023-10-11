const Hero = () => {
  return (
    <section className="hero d-flex">
      <img
        src="https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/CP-Xtreme.jpg"
        alt="Centro de Ayuda"
        width={1920}
        height={1080}
        className="img img--hero-background"
      />
      <div className="container">
        <h1>Centro de ayuda</h1>
        <h2>Podrás navegar por nuestras categorías y buscar información para resolver tus consultas.</h2>
      </div>
    </section>
  );
};

export default Hero;