import './App.css';
import SignUp from './Components/Authentication/SignUp/SignUp';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Components/Authentication/LogIn/LogIn';
import Navbar from './Components/Authentication/Navbar/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* FOR PUBLIC */}
          {/* <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/signup' element={<SignUp/>}></Route> */}
          {/* <Route element={<Navbar/>}> */}
            <Route path="/" element={[<Navbar/>,<Dashboard/>,<Footer/>]}/>
            <Route path="/about" element={[<Navbar/>,<AboutUs/>,<Footer/>]}/>
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
