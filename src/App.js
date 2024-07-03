import React from 'react'
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Shop from './componnets/Shop';
import AboutUs from './pages/AboutUs';
import CallUs from './pages/CallUs';
//import EmailSender from './componnets/EmailSender';
function App() {
  return (
    <div>
       <Router>

          <Routes>
             
             <Route path='/' element={<Home/>}/>
             <Route path='/Shop' element={<Shop/>}/>
             <Route path='/AboutUs' element={<AboutUs/>}/>
             <Route path='/ContactUs' element={<CallUs/>}/>
   
             
             
          </Routes>
       
       </Router>
    </div>
  )
}

export default App
