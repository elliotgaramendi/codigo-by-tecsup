import '../styles/css/Movies.css';

const Movies = () => {

  console.log(process.env.REACT_APP_URL);
  console.log(process.env.REACT_APP_API_TOKEN);

  return (
    <main className="main">
      <section className="movies">
        <div className="movies__container">
          <h1 className="movies__title">🎥 Movies 🎥</h1>
        </div>
      </section>
    </main>
  );
}

export default Movies;