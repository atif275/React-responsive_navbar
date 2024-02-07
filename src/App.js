import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Streaming from "./components/Streaming";
import Detection from "./components/Detection";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/streaming" element={<Streaming />} />
            <Route path="/detection" element={<Detection />} />
            <Route path="/about" element={<About />} />
            {/* <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/streaming">
              <Streaming />
            </Route>
            <Route exact path="/detection">
              <Detection />
            </Route>
            <Route exact path="/about">
              <About />
            </Route> */}
            
            
          </Routes>
        </Router>
    </div>
  );
}