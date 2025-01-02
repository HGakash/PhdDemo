// In your App.js or index.js
import './tailwind.css'; // Ensure the correct path to your tailwind.css file
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resources from './components/Resources'
import Login from './components/Login'
import SignUp from './components/SignUp';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path = '/login'   element={<Login/>}/>
        <Route path = '/signup'   element={<SignUp/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
