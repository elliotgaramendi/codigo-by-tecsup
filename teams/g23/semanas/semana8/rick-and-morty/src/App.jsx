import { useEffect } from "react";
import Hero from "./components/modules/Hero";
import { useState } from "react";

function App() {
  const heroData = {
    title: 'Rick and Morty',
    image: 'https://images.alphacoders.com/133/thumb-1920-1330376.png'
  };

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <Hero data={heroData} />
  );
}

export default App;
