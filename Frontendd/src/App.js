// import logo from './logo.svg';/
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Create from './components/Blog/Create';
import Home from './components/Home/Home';
import Api from "./components/api/api"
import Login from './components/Login_SignUp/Login';
import Signup from './components/Login_SignUp/Signup';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import Dashboard from './components/Blog/Dashboard';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Api/> */}
     <Routes>
      <Route path="/"  element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/profile' element={<Profile/>}> </Route>
      <Route path='/editprofile/:userID' element={<EditProfile/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>

      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>} ></Route>
     </Routes>
    </div>
  );
}

export default App;
