import { BrowserRouter, Route, Routes, } from "react-router-dom";

import MainHome from './components/MainHome'
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./index.css";
import Home from "./components/Home";
import Employement from "./components/hero/Employement";



function App() {
 



  return (
    <>
   
      <BrowserRouter>
    
      
        <Routes>
          {/* Conditionally render Home or MainHome based on the state */}
          <Route path="/" element={ <MainHome/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
         <Route path='/absense' element={<Home/>}/>
         <Route path='/employe' element={<Employement/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
