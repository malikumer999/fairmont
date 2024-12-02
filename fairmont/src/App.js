import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from './Pages/Home';
import Brochure from './Pages/Brochure';
import Location from './Components/Location/Location';

function App() {
  return (

<Router>
<Routes>
<Route path='/' element={<Home/>}/>
<Route  element={<Location/>}/>
<Route exact path='/brochure' element={<Brochure/>}/>
    </Routes>
    
</Router>
  )
}

export default App
