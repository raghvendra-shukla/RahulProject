import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
