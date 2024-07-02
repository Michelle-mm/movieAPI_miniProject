import React from 'react';

const MovieCard = ( {movieTitle, mode} ) =>{
    return(
        <div className="movie" key={movieTitle.imdbID}>
            <div>
                <p>{movieTitle.Year}</p>
            </div>
            <div>
                <img src={movieTitle.Poster !== 'N/A'? movieTitle.Poster : "http://via.placeholder.com/400"} alt="poster"/>
            
            </div>
            <div style={{backgroundColor: mode? '#343739': '#d7f3ff'}}>
                <span style={{color: mode? 'white': 'gray'}}>{movieTitle.Type}</span>
                <h3 style={{color: mode? '#f9d3b4': 'slategray'}}>{movieTitle.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;