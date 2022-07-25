import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
