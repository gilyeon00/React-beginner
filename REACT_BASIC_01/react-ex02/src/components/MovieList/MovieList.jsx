import React from 'react';
import movieData from './../../data/movieData.json'
import './movieList.css'

const MovieList = () => {
    const movies = movieData;
    const gradeColor = {
        '12':'gradeinfo on12',
        '15':'gradeinfo on15',
        '전체':'gradeinfo onall',
    }

    return (
        <div>
            <ul className='movie-lists'> {
                movies.map(movie => {
                    const gradeValue = movie.grade;
                    return (
                        <li className='movie-item' key={movie.id}>
                            <img src={movie.poster} alt={movie.title} />
                            <span className={gradeColor[gradeValue]}>{movie.grade} </span>
                            <span className='txt-field'>
                                <h2 className='title'>{movie.title}</h2>
                                <text className='ticket-ratio'>{movie.rateinfo}%</text>
                                <text className='star'>⭐️{movie.starinfo}</text>
                            </span>

                        </li>
                    )
                })
            }
            </ul>
        </div>
    );
};

export default MovieList;