import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import DataProvider from './context/DataContext';

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
              <Route path='/' />
              <Route path=''  />
              <Route path=''/>
            </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
