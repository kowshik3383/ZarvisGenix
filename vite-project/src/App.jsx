import { BrowserRouter, Route, Routes, } from "react-router-dom";

import MainHome from './components/MainHome'
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./index.css";
import Home from "./components/Home";
import Employement from "./components/hero/Employement";
import Emergency from "./components/emergencies/Emergency";
import Personal from './components/personal/Personal'
import Timesheet from './components/timesheet/Timesheet'
import Document from "./components/documents/Document";
import Clock from "./components/clock/Clock";
import CalenderPart from "./components/calender/CalenderPart";
import Learning from './components/learning/Learning'
import Payroll from './components/payroll/Payroll'
import Expense from "./components/expenses/Expense";
import Data from './components/data/Data'
import Logo from "./components/Logo";
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
         <Route path='/personal' element={<Personal/>}/>
         <Route path='/emergency' element={<Emergency/>}/>
         <Route path='/timesheet' element={<Timesheet/>}/>
         <Route path='/document' element={<Document/>}/>
         <Route path='/clock' element={<Clock/>}/>
         <Route path='/calendar' element={<CalenderPart/>}/>
         <Route path='/learning' element={<Learning/>}/>
         <Route path='/pay' element={<Payroll/>}/>
         <Route path='/expense' element={<Expense/>}/>
         <Route path='/data' element={<Data/>}/>
         <Route path='/daa' element={<Logo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
