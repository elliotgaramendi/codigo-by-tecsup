import { useEffect, useState } from 'react';
import MoviesCard from '../components/movies/MoviesCard';
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
              data.results?.map((movie) => {
                return (
                  <MoviesCard
                    key={movie.id}
                    movie={movie}
                  />
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