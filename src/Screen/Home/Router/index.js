import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import HomeComponent from "../../../Screen/Home/HomeComponent";
function Router() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Router;
