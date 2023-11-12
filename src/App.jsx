import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//COMPONENTS
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";

//PAGES
import Login from "./pages/Login/Login.jsx";
import FormUser from "./pages/FormUser/FormUser.jsx";
import More from "./pages/More/More.jsx";
import Responses from "./pages/Responses/Responses.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<FormUser />} />
          <Route path="/more" element={<More />} />
          <Route path="/responses" element={<Responses />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
