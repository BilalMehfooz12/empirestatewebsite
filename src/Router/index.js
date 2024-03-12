import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import HomeComponent from "../Screen/Home/HomeComponent";
import AboutUs from "../Screen/AboutUs/aboutUs";
import Course from "../Screen/Courses/courser";
import ScrollToTop from "../Component/ScrollTop/scrollTop";
import Contact from "../Screen/Contacts";
import RequestCall from "../Screen/RequestCall/request";
import SignUp from "../Screen/SignUp/signup";
import Thanks from "../Component/Thanks/thank";
import { objData } from "../Screen/CourseData/courseData";
function Router() {
  const [selectedData, setSelectedData] = useState([]);
  const [model, setModel] = useState(false);
  const handleClick = (item) => {
    setSelectedData(item);
    setModel(true);
  };
  const modelClose = () => {
    setModel(false);
  };
  return (
    <div>
      <BrowserRouter>
        <Header
          objData={objData}
          handleClick={handleClick}
          modelClose={modelClose}
        />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route
            path="/"
            element={<HomeComponent handleClick={handleClick} />}
          />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/courses"
            element={
              <Course
                model={model}
                selectedData={selectedData}
                handleClick={handleClick}
                modelClose={modelClose}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/requestCall" element={<RequestCall />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/thank" element={<Thanks />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Router;
