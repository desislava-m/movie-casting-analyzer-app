import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import DataProvider from './context/DataContext';
import FileUploader from './components/FileUploader';
import HomePage from './views/Homepage';
import MoviesPage from './views/MoviesPage';
import ActorsPage from './views/ActorsPage';
import Movie from './components/Movie';

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
              <Route path='/' element ={<FileUploader />}/>
              <Route path='/home' element={<HomePage />}  />
              <Route path='/movies' element={<MoviesPage />}/>
              <Route path='/actors' element={<ActorsPage />} />
              <Route path='/movie/:id' element={<Movie />}/>
            </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
