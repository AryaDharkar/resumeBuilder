import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Templates from "./Pages/ChooseTemplates";
import StepsToBuild from "./Pages/StepsToBuild";
import Navbar from "./Components/Navbar";
import WorkExperience from "./Pages/WorkExperience";
import NotFound from "./Pages/NotFound";
import SelectedTemplate from "./Pages/Templates";
import UserData from "./Pages/UserData";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/steps" element={<StepsToBuild />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/template" element={<SelectedTemplate />} />
        <Route path="/UserData" element={<UserData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
