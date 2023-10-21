import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useEffect, useState } from "react";

function App() {
  const [moviesData, setMoviesData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjlmNzA1YjQ3ODRmNTQ3Mzc2ZjJjZDg4Mzg5MTY4NiIsInN1YiI6IjYyNTA1MjFlYTA1NWVmMDA2NTU3NTEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYHK5Rt55pBTHvGjrEGTjAXRVlGOdnDBpqBxhnhrCL4'
        }
      };
      const response = await fetch('https://api.themoviedb.org/3/discover/movie', options);
      const data = await response.json();
      setMoviesData(data);
    };
    fetchData();
  }, []);

  return (
    <section className="py-8">
      <div className="container px-2 mx-auto flex flex-col gap-8">
        <h1 className="text-sky-500 text-3xl text-center font-black">Cine Feliz</h1>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-8">
          {moviesData.results?.map(element => {
            const { id, original_language, overview, poster_path, release_date, title, vote_average } = element;
            return (
              <div key={id}>
                <div className="h-64 p-4 rounded-2xl bg-zinc-800 shadow-lg shadow-sky-500 grid grid-cols-[1.5fr,_2fr] gap-8">
                  <div className="relative h-56">
                    <img
                      src={'https://image.tmdb.org/t/p/w300' + poster_path}
                      alt=""
                      width={160}
                      height={256}
                      className="block object-cover w-full h-full rounded-2xl"
                    />
                    <div className="absolute top-2 right-2 p-2 rounded-2xl bg-amber-500 font-bold">{vote_average}</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-bold line-clamp-2">{title}</h2>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-gray-400">{format(new Date(release_date), 'dd MMMM yyyy', { locale: es })}</div>
                      <div className="text-sm text-gray-500">{original_language}</div>
                    </div>
                    <p className="line-clamp-6">{overview}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App
