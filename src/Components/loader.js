import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="shadow" />
        <div className="shadow" />
        <div className="shadow" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    width: 200px;
    height: 60px;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle {
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: #1E90FF; /* Azul metálico */
    transform-origin: 50%;
    animation: circle7124 0.5s alternate infinite ease;
  }

  @keyframes circle7124 {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }

    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }

    100% {
      top: 0%;
    }
  }

  .circle:nth-child(1) {
    left: 15%;
    animation-delay: 0s;
  }

  .circle:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }

  .circle:nth-child(3) {
    right: 15%;
    animation-delay: 0.3s;
  }

  .shadow {
    width: 20px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(30, 144, 255, 0.5); /* Azul metálico con opacidad */
    position: absolute;
    top: 62px;
    transform-origin: 50%;
    z-index: -1;
    filter: blur(1px);
    animation: shadow046 0.5s alternate infinite ease;
  }

  @keyframes shadow046 {
    0% {
      transform: scaleX(1.5);
    }

    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }

    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }

  .shadow:nth-child(4) {
    left: 15%;
    animation-delay: 0s;
  }

  .shadow:nth-child(5) {
    left: 45%;
    animation-delay: 0.2s;
  }

  .shadow:nth-child(6) {
    right: 15%;
    animation-delay: 0.3s;
  }
`;

export default Loader;
