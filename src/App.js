import React, { useState } from "react";
import GlobalStyle from "./Global/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Slider";
import { SliderData } from "./data/SliderDta";
import DropDown from "./components/Dropdown";
import menuData from "./data/MenuData";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./data/InfoData";
import Apartaments from "./components/Apartaments";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toogle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toogle={toogle} />
      <DropDown isOpen={isOpen} toggle={toogle} menu={menuData} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} reverse={false} />
      <Apartaments />
      <InfoSection {...InfoData} reverse={true} />
    </>
  );
}

export default App;
