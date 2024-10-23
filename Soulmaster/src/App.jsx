import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Adventures from "./pages/Adventures/Adventures";
// import AdventureDetails from "./pages/AdventureDetails/AdventureDetails";
// import Masters from "./pages/Masters/Masters";
// import MasterDetails from "./pages/MasterDetails/MasterDetails";
// import ContactMaster from "./pages/ContactMaster/ContactMaster";
// import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adventures" element={<Adventures />} />
        {/* <Route path="/adventures/:adventureId" element={<AdventureDetails />} />
        <Route path="/masters" element={<Masters />} />
        <Route path="/masters/:masterId" element={<MasterDetails />} />
        <Route path="/contact" element={<ContactMaster />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/not-found" />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
