const MoviesCard = ({ movie }) => {
  const { id, poster_path, title } = movie;
  const imageEndpoint = `https://image.tmdb.org/t/p/w300${poster_path}`;
  return (
    <li
      className="movies__movie-item"
    >
      <figure className="movies__movie-poster-container">
        <img
          src={imageEndpoint}
          alt={title}
          className="movies__movie-poster"
        />
      </figure>
      <h2 className="movies__movie-title">{title}</h2>
    </li>
  );
};

export default MoviesCard;