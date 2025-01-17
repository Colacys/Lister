import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

export const ResultCard = ({movie}) => {
    const { 
        addMovieToWatchlist,
        addMovieToWatched, 
        watchlist,
        watched
    } = useContext(GlobalContext);

    let storedMovie = watchlist.find((o)=> o.id === movie.id);
    let storedMovieWatched = watched.find(o => o.id === movie.id)
    const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? false
    : false;


   const watchedDisabled = storedMovieWatched
   ? true
   : false;

    return (
        <div className="result-card">
            <div className="poster-wrapper">

                {movie.poster_path ? (                  
                    <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} 
                    alt={`${movie.title} Poster`}
                    />
                ): (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="Header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">
                        {movie.release_date ? movie.release_date.substring(0, 4) : `-` }
                    </h4>
                </div>

                <div className="btn-controls-add">

                    <div className="controls">
                        <button className="btn"
                        disabled={watchlistDisabled}
                        onClick={() => addMovieToWatchlist(movie)}>
                            Add to Watchlist
                        </button>
                    </div>

                    <div className="controls">
                        <button className="btn"
                        disabled={watchedDisabled}
                        onClick={() => addMovieToWatched(movie)}>
                            Add to Watched
                        </button>
                    </div>

                    <div className="controls more">
                        <div className="add-to">
                            <button className="btn"><i class="fas fa-chevron-circle-down"></i>
                            </button>
                        </div>
                       
                    </div>

                 </div>
            </div>
        </div>
    )
}
