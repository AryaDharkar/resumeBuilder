import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Templates from "./Pages/ChooseTemplates";
import StepsToBuild from "./Pages/StepsToBuild";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/steps" element={<StepsToBuild />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
