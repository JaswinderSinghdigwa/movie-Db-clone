import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
const Movies = lazy(() => import("./Movies"));

function App() {
  let myStyle={
    margin: 'auto auto'
  }
  const [movie, setMovies] = useState();
  const getMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=1e2e2c88ffb2dcaabfdb3c8a894b529a&language=en-US&page=1"
    );
    setMovies(res.data.results);
  };
  useEffect(() => {
    getMovies();
    console.log(movie);
  }, []);
  return (
    <Suspense style={myStyle}fallback={<div>Loading...</div>} className="App">
      <Movies list={movie} />
    </Suspense>
  );
}

export default App;
