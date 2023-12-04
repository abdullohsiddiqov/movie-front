import React, { useEffect,useState } from 'react';
// import {Navbar} from './components/navbar';
// import { GetMovies } from './components/movies';
// import { GetGenres } from './components/genres';0
import { IEntity } from './types/type';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import './components/styles/index.scss'
function App() {
  const [movie ,setMovie] = useState([])
  const [genres ,setGenres] = useState([])
  useEffect(()=>{ 
    async function movies(){ 
      const data = await fetch('http://localhost:4000/movies');
      const response = await data.json();
      setMovie(response)
    }
    movies();
  },[]);
  return (
    <>
    {/* <Navbar />
            <tbody className="tbody">
            {movie.map((movie:IEntity.Movies)=>(
      <GetMovies id={movie.id}
      title={movie.title}
      genre = {movie.genre}
      numberInStock={movie.numberInStock} 
      dailyRentalRate={movie.dailyRentalRate} 
      />
      ))} */}
            {/* </tbody> */}
    </>
  );
}

export default App;
