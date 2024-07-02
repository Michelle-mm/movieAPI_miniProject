import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';

const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=a855b7a2';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [mode, setMode] = useState(true);
  const searchMovie = async(title)=>{
    const response = await fetch(`${API_KEY}&s=${title}`);
    const movie_data = await response.json();

    setMovies(movie_data.Search);
  }
  useEffect(()=>{
    searchMovie('Spider');
  },[]);

  return (
    <div className={mode? "App": "App AppLight"}>
      <div className='top'>
        <div className='title'>
          <h1 className={mode? "h1Title": "h1TitleLight"}>MovieLand</h1>
          <div className={mode? "modeBtnElement": "modeBtnElement modeBtnElementLight"}>
            <p>Dark</p>
            <div className={mode? "modeBtn": " modeBtn modeBtnLight"} onClick={()=>setMode((prevMode)=>!prevMode)}>
              <button className={mode? 'btn': 'btn btnLight'}></button>
            </div>
            <p>Light</p>
          </div>
        </div>
        <div className={mode? 'search': 'search searchLight'}>
          <input className={mode? 'searchInput': 'searchInput searchInputLight'} placeholder='Seach for Movies' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
          <img src={SearchIcon} alt='search' onClick={()=>searchMovie(searchTerm)}/>
        </div> 
      </div>
      {movies?.length>0 ?(
          <div className="container">
            {movies.map((movie)=>(
              <MovieCard movieTitle={movie} mode={mode}/>
            ))}
          </div>
        ) :(
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )
      }

    </div>
  );
}

export default App;
