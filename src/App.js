
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import MovieList from './components/movieList/movieList';
import Home from './pages/home/home';
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='movie/:id' element={<Movie/>}></Route>
        <Route path='movies/:type' element={<MovieList/>}></Route>
        <Route path='/*' element={<h1>error page</h1>}></Route>
      </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
