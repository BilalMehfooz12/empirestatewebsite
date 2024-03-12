import { useState } from "react";
import Inventing from "../Inventing";
import WebsiteFeatures from "../WebsiteFeatures";
import WebsitePrice from "../WebsitePrice";
import ContactUs from "../../Home/contactUs/contactus";
import Project from "../Project";
import Industries from "../Industries";
import GetInTouch from "../GetInTouch";
import { objData } from "../../../Screen/CourseData/courseData";
const HomeComponent = () => {
  return (
    <div>
      <Inventing />
      <WebsiteFeatures />
      {/* <WebsitePrice /> */}
      <ContactUs />
      {/* <Project /> */}
      {/* <Industries /> */}
      {/* <GetInTouch /> */}
    </div>
  );
};

export default HomeComponent;
