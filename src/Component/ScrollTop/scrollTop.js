import React, { useState } from "react";
import "./ScrollToTop.css"; // Assuming you have a separate CSS file for styling
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        <div className="scroll-icon" onClick={scrollToTop}>
          {/* <i className="fas fa-chevron-up"></i> */}
          <KeyboardArrowUpIcon className="srcoll_icon" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
