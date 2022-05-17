import { useEffect, useState } from 'react';
import '../styles/css/Movies.css';

const Movies = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const endpoint = `${process.env.REACT_APP_URL}/discover/movie`;
      const options = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          'Content-Type': 'application/json;charset=utf-8'
        }
      };
      try {
        const response = await fetch(endpoint, options);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <main className="main">
      <section className="movies">
        <div className="movies__container">
          <h1 className="movies__title">🎥 Movies 🎥</h1>
          <ul className="movies__movie-list">
            {
              data.results?.map((element) => {
                const { id, poster_path, title } = element;
                const imageEndpoint = `https://image.tmdb.org/t/p/w300${poster_path}`;
                return (
                  <li
                    key={id}
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
              })
            }
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Movies;