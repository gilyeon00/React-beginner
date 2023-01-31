import React from 'react';
import movieData from './../../data/movieData.json'
import './movieList.css'

const MovieList = () => {
    const movies = movieData;
    console.log(movies)

    return (
        <div>
            <ul className='movie-lists'> {
                movies.map(movie => {
                    return (
                        <li className='movie-item' key={movie.id}>
                            <img src={movie.poster} alt={movie.title} />
                            <h2 className='title'>{movie.title}</h2>
                            <span className='ticket-sale'>{movie.rateinfo}%</span>
                            <span className='star'>⭐️{movie.starinfo}</span>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    );
};

export default MovieList;