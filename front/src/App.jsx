import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Spots from "./components/Spots";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/spots" element={<Spots />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
