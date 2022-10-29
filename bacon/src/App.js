import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Bacon from "./pages/Bacon";
import About from "./pages/About";
import BaconIpsum from "./pages/BaconIpsum"
import './App.css';


export default function App() {
  return (
    <BrowserRouter basename="/CreativeProject3/bacon/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bacon" element={<Bacon />} />
          <Route path="about" element={<About />} />
          <Route path="bacon-ipsum" element={<BaconIpsum />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//export default App
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);