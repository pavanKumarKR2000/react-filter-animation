import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import Movie from './components/Movie';
import { motion } from 'framer-motion';

function App() {

  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredPopularMovies, setFilteredPopularMovies] = useState([]);
  const [currentGenre,setCurrentGenre] = useState(0);

  const fetchData = async() => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b00b9ec8e23f68ccf224bb1a65c0ccd5&language=en-US&page=1");
    const data = await response.json();
    setPopularMovies(data.results);
    setFilteredPopularMovies(data.results);
    console.log(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='py-8 flex flex-col justify-center items-center gap-6'>
      <Filter
        popularMovies={popularMovies}
        setFilteredPopularMovies={setFilteredPopularMovies}
        currentGenre={currentGenre}
        setCurrentGenre={setCurrentGenre} />
      <motion.div   initial={{opacity:0}} animate={{opacity:1}} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 justify-items-center items-center border-t py-8 border-slate-400'>
        {
          filteredPopularMovies.map((popularMovie) =>
          <Movie title={popularMovie.title} imgUrl={popularMovie.poster_path || popularMovie.backdrop_path} key={popularMovie.id} />)
        }
      </motion.div>
    </div>
  )
}

export default App
