import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Secondpage from "./components/Secondpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secondpage" element={<Secondpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
