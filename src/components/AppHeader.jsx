import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Modal from "./UI/Modal";


// Создайте стилизованный компонент для заголовка
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0074d9;
  color: #fff;
  padding: 10px;
`;

const Title = styled.h1`
  margin: 0;
`;

  const CartIcon = styled(FaShoppingCart)`
  font-size: 24px;
  cursor: pointer;
`;

const BasketBox = styled.div`
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: 2x 2px 3px green;
  padding: 10px 30px;
`;

export const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = () => setIsOpen((prevState) => !prevState);
  return (
    <>
      {isOpen && <Modal onClose={modalHandler}>Text</Modal>}
      <HeaderContainer>
        <Title>Магазин товаров</Title>
        <BasketBox onClick={modalHandler}>
          <CartIcon />
        </BasketBox>
      </HeaderContainer>
    </>
  );
};
