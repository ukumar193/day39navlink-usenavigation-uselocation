import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import About from "./components/About";
import Logout from "./components/Logout";
import Profile from "./components/Profile";



function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Routes>
     <Route path="/"element={<Login/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
     <Route path="/home" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/logout" element={<Logout/>}></Route>
     <Route path="/profile" element={<Profile/>}></Route>
     
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
