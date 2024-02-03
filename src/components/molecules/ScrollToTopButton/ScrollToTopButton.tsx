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
    <div data-testid="scroll-to-top">
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
  position: fixed;
  right: 40px;
  bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 45px;
  height: 45px;

  border-radius: 30px;
  z-index: 1000;
  cursor: pointer;

  background-color: rgb(46, 104, 150);
  opacity: 1;

  -webkit-transition: all 0.4s;

  &:hover {
    opacity: 0.9;
  }
`;
