import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home/home';
import './App.css';
import { Login,Register } from './pages/register-login/login-register';
import {Authcontext} from '../src/contextprovider'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

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
      <Routes>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} ></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="Register" element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
