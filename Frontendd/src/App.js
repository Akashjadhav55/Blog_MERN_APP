// import logo from './logo.svg';/
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Create from './components/Blog/Create';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path="/"  element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
