import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SubmitRequest from './submitRequest/SubmitRequest';
import NavBar from './commonComponents/Navbar';
import Courses from './submitRequest/AllCourses';

function App(){
    return (
        <><Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<SubmitRequest />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>
      </Router>
        </>
    );
}

export default App;
