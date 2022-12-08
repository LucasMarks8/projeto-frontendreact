import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Home from "./components/Home/Home";
import { DivContainer } from "./Styled";

const App = () => {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const [priceOrder, setPriceOrder] = useState("");
  const [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <DivContainer>
      <Filter
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        searchByName={searchByName}
        setSearchByName={setSearchByName}
      />
      <Home
        minValue={minValue}
        maxValue={maxValue}
        searchByName={searchByName}
        priceOrder={priceOrder}
        setPriceOrder={setPriceOrder}
        setCart={setCart}
        cart={cart}
      />
      <Cart cart={cart} setCart={setCart} />
    </DivContainer>
  );
};

export default App;
