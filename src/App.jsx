import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import DataProvider from './context/DataContext';
import FileUploader from './components/FileUploader';

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
              <Route path='/' element ={<FileUploader />}/>
              <Route path=''  />
              <Route path=''/>
            </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
