import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import React from "react";
import './App.css';
import Default from './pages/Default.js';
import Home from './pages/Home.js';
import Docs from './pages/Documentation.js';
import Contact from './pages/Contact.js';
import Tos from './pages/Tos.js';
import PP from './pages/PrivacyPolicies.js';

function App() {
  return (
    <div>
 <Router>
    <Navbar />
	  <br></br>
	  <br></br>
	  <br></br>
	  <br></br>
    <Routes>
        <Route  path='/'  element={<Default />} />
        <Route path='/home' element={<Home />}  />
	  <Route path='/document' element={<Docs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacypolicies' element={<PP />} />
        <Route path='/tos' element={<Tos />} />
    </Routes>
    </Router>

	  </div>
  );
}

export default App;
