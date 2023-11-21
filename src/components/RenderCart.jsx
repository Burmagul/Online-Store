import React from "react";
import styled from "styled-components";

const RenderCart = ({ name, price, src, alt, quantity, totalPrice}) => {



  return (
    <>
      <CartContainer>
        <CartImage src={src} alt={alt} />
        <div>
          <CartName>{name}</CartName>
          <hr />
          <div>Price: {price} сом</div> <br></br>
          <div>Quantity: {quantity}</div>
          <div>TotalPrice: {totalPrice}</div>
        </div>

        <CartButton> Added</CartButton>
        
      </CartContainer>
    
    </>
   
  );
};
export default RenderCart;
const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 10px;
  text-align: center;
  width: 250px;
  height: 300px;
`;
const CartImage = styled.img`
  max-width: 130px;
  max-height: 130px;
  margin-left: 55px;
`;
const CartButton = styled.button`
  width: max;
  height: 30px;
  color: white;
  background-color: #e8465b;
  border-color: white;
  border-radius: 3px;
  margin-left: 15px;
`;
const CartName = styled.div`
  font-weight: bold;
`;
