import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home/home';
import './App.css';
import { Login,Register } from './pages/register-login/login-register';
import {Authcontext} from '../src/contextprovider'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import About from './pages/About/about';

function App() {
  const {currentUser} = useContext(Authcontext)
  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return(
        <Navigate to="/Login"/>
      )
    }
    return(
      children
    )
  }
  return (
    <Router>
      <Routes basename="/devcode_assigment">
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} ></Route>
        <Route path="/devcode_assigment" element={<Login/>}></Route>
        <Route path="Register" element={<Register/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
