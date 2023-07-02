import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Guidelines from './Guidelines';
import Registration from "./Registration"
import Maindashboard from "./Maindashboard"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Mainpage from "./Mainpage"
import Registration1 from './components/Registration1';
import Registration2 from './components/Registration2';
import Registration3 from './components/Registration3';
import Registration4 from './components/Registration4';
import Registration5 from './components/Registration5';
import Norecords from './components/NoRecords';
import Next from './components/Temp';





function App() {
  return (

      <Router>
      <Routes>


      <Route path=""
        
        element={<Login />} />

       <Route path="/Mainpage"
        
        element={<Mainpage />} />

        <Route path="/Maindashboard"
        
        element={<Maindashboard />} />
        <Route path="/Students"
        
        element={< Registration/>} />

      <Route path="/Employees"
        
        element={< Guidelines/>} />

      <Route path="/Logout"
        
        element={< Login/>} />
      
      <Route path="/Registration1"
        
        element={< Registration1/>} />

      <Route path="/Registration2"
        
        element={< Registration2/>} />

      <Route path="/Registration3"
        
        element={< Registration3/>} />

    <Route path="/Registration4"
            
            element={< Registration4/>} />
      
      <Route path="/Registration5"
            
            element={< Registration5/>} />

      <Route path="/Guidelines"
            
            element={< Guidelines/>} />

      <Route path="/Norecords"
            
            element={<Norecords />} />
      </Routes>

      
      </Router>
  );
}

export default App;

