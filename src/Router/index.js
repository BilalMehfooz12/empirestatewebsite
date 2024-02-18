import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import HomeComponent from "../Screen/Home/HomeComponent";
import AboutUs from "../Screen/AboutUs/aboutUs";
import Course from "../Screen/Courses/courser";
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courses" element={<Course />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Router;
