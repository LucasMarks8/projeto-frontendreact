import React from "react";
import { products } from "../../constants/products";
import { priceFormater } from "../../utils/priceFormater";
import { CardContainer, CardProductContainer } from "./Styled";

const CardProduct = (props) => {
  const onClickSetCart = (productToAdd) => {
    const newCart = [...props.cart];

    const productFound = newCart.find(
      (productInCart) => productInCart.id === productToAdd.id
    );

    if (!productFound) {
      const newProduct = { ...productToAdd, quantity: 1 };
      newCart.push(newProduct);
      props.setCart(newCart);
    } else {
      productFound.quantity++;
    }
    const cartList = JSON.stringify(newCart);
    localStorage.setItem("cartList", cartList);
  };

  const productsList = products
    .filter((product) => {
      return props.minValue === "" || product.price >= props.minValue;
    })
    .filter((product) => {
      return props.maxValue === "" || product.price <= props.maxValue;
    })
    .filter((product) => {
      return product.name.toLowerCase().includes(props.searchByName);
    })
    .sort((a, b) => {
      if (props.priceOrder === "price up") {
        if (a.price < b.price) {
          return -1;
        } else {
          return 1;
        }
      } else if (props.priceOrder === "price down") {
        if (a.price > b.price) {
          return -1;
        } else {
          return 1;
        }
      }
    })
    .map((product) => {
      return (
        <CardProductContainer className="card" key={product.id}>
          <img src={product.image} alt={"imagem de planeta"} />
          <div className="text">
            <p>{product.name}</p>
            {/* <p>{product.descricao}</p> */}
          </div>
          <div className="price-add">
            <p>{priceFormater.format(product.price)}</p>
            <button onClick={() => onClickSetCart(product)}>Adicionar</button>
          </div>
        </CardProductContainer>
      );
    });

  return <CardContainer>{productsList}</CardContainer>;
};

export default CardProduct;
