import React from "react";
import Cart from "./Components/Cart/Cart";
import Filter from "./Components/Filter/Filter";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <div>
      <Filter />
      <Home />
      <Cart />
    </div>
  );
};

export default App;
