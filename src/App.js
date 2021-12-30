
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './component/Header';
import Home from './component/Home';
import Contact from './component/Contact';
import Studata from './component/Studata';

import {StudentProvider} from './component/StudenContext'
import Temp from './component/Temp';


function App() {
  return (
  <>
  <StudentProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/student' element={<Temp />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/student-dec' element={<Studata data={false}  />}/>
            <Route path='/student-dec/:fid' element={<Studata data={true}/>} />

          </Routes> </Router>
  </StudentProvider>
      </>
 
  );
}

export default App;
