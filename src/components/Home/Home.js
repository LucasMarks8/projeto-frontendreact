import React from "react";
import { HomeContainer } from "./Styled";
import CardProduct from "../CardProduct/CardProduct";
import Github from "../../constants/image/gitHub.png";
import Linkedin from "../../constants/image/linkedin.png";

const Home = (props) => {
  const onHandlePriceOrder = (e) => {
    props.setPriceOrder(e.target.value);
  };

  return (
    <HomeContainer>
      <select value={props.priceOrder} onChange={onHandlePriceOrder}>
        <option>Ordenação de preço</option>
        <option value="price up">Preço crescente</option>
        <option value="price down">Preço decrescente</option>
      </select>
      <CardProduct
        minValue={props.minValue}
        maxValue={props.maxValue}
        searchByName={props.searchByName}
        priceOrder={props.priceOrder}
        setCart={props.setCart}
        cart={props.cart}
      />
      <div className="created">
        <h4>Criado por Lucas Marques</h4>
        <span className="icons">
          <a href="https://github.com/LucasMarks8" target={"_blank"}>
            <img className="git" src={Github} alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-henrique-marques/"
            target={"_blank"}
          >
            <img className="link" src={Linkedin} alt="linkedin icon" />
          </a>
        </span>
      </div>
    </HomeContainer>
  );
};

export default Home;
