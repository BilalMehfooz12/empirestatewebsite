import React, { useState } from "react";
import "./ScrollToTop.css"; // Assuming you have a separate CSS file for styling
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { useNavigate } from "react-router-dom";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div className="scroll-icon">
          {/* <i className="fas fa-chevron-up"></i> */}
          <KeyboardArrowUpIcon className="srcoll_icon" onClick={scrollToTop} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => navigate("/requestCall")}
          >
            <h4
              style={{
                margin: 10,
                backgroundColor: "rgb(50, 186, 2)",
                padding: "4%",
              }}
            >
              <span style={{ marginRight: "0.5em" }}>Request</span>
              <span style={{ marginRight: "0.5em" }}>a</span>
              <span style={{ marginRight: "0.5em" }}>Call</span>
              <span>Back</span>
            </h4>
            <div className="what_app_icon_main">
              <PhoneEnabledIcon className="what_app_icon" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
