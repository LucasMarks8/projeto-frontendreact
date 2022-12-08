import React, { useEffect } from "react";
import { priceFormater } from "../../utils/priceFormater";
import { CartContainer } from "./Styled";

const Cart = (props) => {
  useEffect(() => {
    const cartList = localStorage.getItem("cartList");
    console.log(cartList);
    if (cartList !== null) {
      const newCartList = JSON.parse(cartList);
      props.setCart(newCartList);
    }
  }, []);

  const total = props.cart.reduce(
    (acc, product) => product.price * product.quantity + acc,
    0
  );

  const onClickRemove = (id) => {
    const newCart = [...props.cart];

    for (let i = 0; i < props.cart.length; i++) {
      if (newCart[i].id === id) {
        if (newCart[i].quantity > 1) {
          newCart[i].quantity--;
          localStorage.clear();
          const cartList = JSON.stringify(newCart);
          localStorage.setItem("cartList", cartList);
        } else {
          newCart.splice(i, 1);
          const cartList = JSON.stringify(newCart);
          localStorage.setItem("cartList", cartList);
        }
        props.setCart(newCart);
      }
    }
  };

  return (
    <CartContainer>
      <h2>Carrinho de compras</h2>
      {props.cart.map((product) => {
        return (
          <div key={product.id}>
            <div className="image">
              <img src={product.image} alt="image icon" />
            </div>
            <div className="text">
              <p>Produto: {product.name}</p>
              <p>Preço: {priceFormater.format(product.price)}</p>
              <span>Qtd: {product.quantity} </span>
              <button onClick={() => onClickRemove(product.id)}>Delete</button>
            </div>
          </div>
        );
      })}
      <div className="total">
        <h3>Total = {priceFormater.format(total)}</h3>
      </div>
    </CartContainer>
  );
};

export default Cart;
