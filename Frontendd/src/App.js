// import logo from './logo.svg';/
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Create from './components/Blog/Create';
import Home from './components/Home/Home';
import Api from "./components/api/api"
import Login from './components/Login_SignUp/Login';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Api/> */}
     <Routes>
      <Route path="/"  element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>

      <Route path='login' element={<Login/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
