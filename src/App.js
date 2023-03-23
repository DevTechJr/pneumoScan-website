import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HIW from "./pages/HIW";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PneumoScan from "./pages/PneumoScan";
import Pneumonia from "./pages/Pneumonia";

function App() {
  return (
    <Router>
      <div className="p-3 px-2 md:px-10">
        <Navbar />

        <main className="select-none container mx-auto flex items-center justify-center flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hiw" element={<HIW />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/pneumoScan" element={<PneumoScan />} />
            <Route path="/pneumonia" element={<Pneumonia />} />
            {/* <Route path="/drugSearch" element={<DrugSearch />} />
            <Route path="/drugScan" element={<DrugScan />} /> */}
            {/* <Route path="/drugResult/:drugid" element={<DrugResult />} /> */}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
