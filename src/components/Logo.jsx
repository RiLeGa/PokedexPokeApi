import React from "react";
import { useSpring, animated, config } from "react-spring";
import logo from '../assets/3.svg'


const TuComponente = () => {
    const animationProps = useSpring({
      from: { transform: "rotate(-20deg)" },
      to: { transform: "rotate(20deg)" },
      config: { duration: 500, reset: true, reverse: true},
      delay: 10,
    });
  
    return (
      <animated.img
        style={{
          ...animationProps,
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "center",
          width: "80px",
          padding: "5px"
        }}
        src={logo}
        alt=''
      />
    );
  };
  
  export default TuComponente;