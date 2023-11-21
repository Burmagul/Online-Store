import React from "react";
import RenderCart from "./RenderCart";
import { styled } from "styled-components";

const CartParendContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Cart = ({ cartProducts }) => {
  function totalCartPrice() {
    cartProducts.reduce((sum, elem) => {
      return (sum += elem);
    }, 0);
  }

  return (
    <CartParendContainer>
      {cartProducts.map((item, id) => {
        return <RenderCart {...item} key={id} totalPrice={totalCartPrice} />;
      })}
    </CartParendContainer>
  );
};
export default Cart;
