"use client";

import { useState, useEffect } from "react";
import { Arrow } from "../Icons/Arrow";
import { styled } from "styled-components";

const ScrollToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <Wrapper onClick={goToTop}>
          <Arrow
            direction="up"
            color="white"
            size={{ width: "1.5rem", height: "1.5rem" }}
          />
        </Wrapper>
      )}
    </div>
  );
};

export default ScrollToTopButton;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 45px;
  height: 45px;
  right: 40px;
  border-radius: 30px;
  background-color: rgb(46, 104, 150);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  -webkit-transition: all 0.4s;
  bottom: 10px;
  opacity: 1;

  &:hover {
    opacity: 0.9;
  }
`;
