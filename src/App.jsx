import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import './App.css'
import { Properties } from "./components/Properties";
import { NavBar } from "./components/NavBar";



function App() {
  return (
    <>
      <NavBar />
      <div className="mt-5" id="app">
        <Routes>
          <Route path="/" element={<div>Főoldal</div>} />
          <Route path="properties" element={<Properties />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
