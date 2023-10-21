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
        <ul>
          {moviesData.results?.map(element => <li key={element.id}>{element.id}</li>)}
        </ul>
      </div>
    </section>
  );
}

export default App
