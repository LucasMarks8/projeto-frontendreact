import React from "react";
import Cart from "./Components/Cart/Cart";
import Filter from "./Components/Filter/Filter";
import Home from "./Components/Home/Home";
import { DivContainer } from "./Styled";

const App = () => {

  return (
    <DivContainer>
      <Filter />
      <Home />
      <Cart />
    </DivContainer>
  );
};

export default App;
