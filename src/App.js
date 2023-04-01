import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import {Login,Register} from './pages/register-login/login-register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} ></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="Register" element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
