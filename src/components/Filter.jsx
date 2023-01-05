import React, { useEffect, useState } from 'react'

const Filter = ({ popularMovies, setFilteredPopularMovies, currentGenre, setCurrentGenre }) => {
    
    useEffect(() => {
        
        if (currentGenre === 0) {
            setFilteredPopularMovies(popularMovies);
            return;
        }
        
        const filtered = popularMovies.filter((popularMovie) => popularMovie.genre_ids.includes(currentGenre));
        setFilteredPopularMovies(filtered);
        console.log(filtered);
    }, [currentGenre]);    

  return (
      <div className='flex items-center justify-between gap-8 text-lg 2xl:text-2xl'>
          <button
              className={`outline outline-1 outline-blue-500 rounded-md py-1 px-4 text-blue-500 ${currentGenre === 0 ? 'bg-blue-500 text-white outline-0' : ''}`}
              onClick={()=>setCurrentGenre(0)}
              >
              All
          </button> 
          <button className={`outline outline-1 outline-blue-500 rounded-md py-1 px-4 text-blue-500 ${currentGenre === 35 ? 'bg-blue-500 text-white outline-0' : ''}`}
           onClick={()=>setCurrentGenre(35)}
          >
              Comedy
          </button> 
          <button className={`outline outline-1 outline-blue-500 rounded-md py-1 px-4 text-blue-500 ${currentGenre === 28 ? 'bg-blue-500 text-white outline-0' : ''}`}
           onClick={()=>setCurrentGenre(28)}
          >
              Action
          </button> 
      </div>
  )
}

export default Filter;