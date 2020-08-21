import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
import { MovieCard } from "./MovieTemplate";

export const Watched = () => {
    const {watched} = useContext(GlobalContext);

    const trigger =  watched.map((movie) => (
        <div>
        <MovieCard movie={movie} type="watched"/>
        </div>
    ));

    return (
        <div>
            <div className="movie-page">
                <div className="container">
                    <div className="header">
                    <div className="view">
                                <h1 className="heading">Watched Movies</h1>
                                <span className="count-pill"> {watched.length}</span>
                            </div>
                        {/* <span className="count-pill">{watched.length > 5 ? "View More" : ""} </span>        */}
                    </div>
                    {watched.length > 0 ? (
                        <div className="movie-grid">
                        {trigger}
                    </div>
                    ): (<h2 className="no-movies">No Movies Added</h2>
                    )}
                </div>
            </div>
    </div>
    )
}
