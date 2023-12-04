import React, { useEffect, useState } from 'react';
import { Cards } from './card';
import { IEntity } from '../types/type';
import "../index.css"
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

export function AllCards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetch('http://localhost:4000/api/movies');
        const response = await data.json();
        setMovies(response);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      <div className="grid">
        {movies.map((movie: IEntity.Movies) => (
          <Cards
            Title={movie.Title}
            Year={movie.Year}
            Rated={movie.Rated}
            Released={movie.Released}
            Runtime={movie.Runtime}
            Country={movie.Country}
            Awards={movie.Awards}
            Images={movie.Images}
            Genre={movie.Genre}
          />
        ))}
      </div>
    </>
  );
}
