import React, { useState, useEffect } from "react";
import "./ScrollToTop.css"; // Assuming you have a separate CSS file for styling
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { useNavigate } from "react-router-dom";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [reuestisVisible, setreuestIsVisible] = useState(false);

  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 1500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollRequest = () => {
    if (window.scrollY > -0) {
      setreuestIsVisible(true);
    } else {
      setreuestIsVisible(false);
    }
  };
  useEffect(() => {
    // Add event listener to handle scroll
    window.addEventListener("scroll", handleScrollRequest);

    // Initial check for visibility when component mounts
    handleScrollRequest();

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScrollRequest);
    };
  }, []);

  window.addEventListener("scroll", handleScroll);
  // window.addEventListener("scroll", handleScrollRequest);

  return (
    <div className="scroll-to-top">
      <div className="scroll-icon">
        {isVisible && (
          <div>
            {/* <i className="fas fa-chevron-up"></i> */}
            {/* <KeyboardArrowUpIcon
              className="srcoll_icon"
              onClick={scrollToTop}
            /> */}
          </div>
        )}
        {reuestisVisible && (
          // <div className="scroll-icon">

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
          // </div>
        )}
      </div>
    </div>
  );
};

export default ScrollToTop;
