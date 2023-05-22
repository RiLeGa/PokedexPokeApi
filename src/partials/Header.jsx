import React, { useState } from "react";
import logo from '../assets/3.svg'

export const Header = () => {

  return (
    <>
    <header>

      <section style={{
        display: "flex"
      }}>

        <img className="logo react" src={logo} alt=''/>
       
        <h2
        style={{
          color:"yellow",
        }} >  Pokedex</h2>
      </section>
        
    </header>
    </>
  );
};
