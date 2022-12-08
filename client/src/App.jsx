import Navbar from "./components/navbar/navbar";
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./components/registration/registration";
import Login from "./components/registration/login";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="wrap">
          {!isAuth && 
            <Routes>
              <Route path="Registration" element={ <Registration/> }/>
              <Route path="Login" element={ <Login/> }/>
            </Routes>
          }
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
