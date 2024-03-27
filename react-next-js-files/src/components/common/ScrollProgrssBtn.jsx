import React, { useEffect } from "react";

function ScrollProgrssBtn() {
  useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
  // sticky header function
  const handleStickyHeader = () => {
    const header = document.querySelector(".circle-container");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("active")
      : header.classList
      ? header.classList.remove("active")
      : header.classList.add("active");
  };
  return (
    <div
      className="circle-container"
      onClick={() => window.scrollTo({ top: 0, behavior:"smooth" })}
    >
      <svg
        className="circle-progress svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
}

export default ScrollProgrssBtn;
