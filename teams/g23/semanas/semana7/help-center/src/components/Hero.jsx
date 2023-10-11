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
      <div className="container g-layout g-layout--center md:g-layout--1fr-2fr g-sm">
        <div className="card">
          <div className="card__body d-flex f-direction-column g-5xs">
            <h1 className="card__title card__title--5xl">Centro de ayuda</h1>
            <h2 className="card__text">Podrás navegar por nuestras categorías y buscar información para resolver tus consultas.</h2>
          </div>
        </div>
        <form className="w-100% d-flex">
          <input type="search" name="question" placeholder="Pregunta" className="input input--search"/>
        </form>
      </div>
    </section>
  );
};

export default Hero;