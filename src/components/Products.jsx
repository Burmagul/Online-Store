import React from "react";
import styled from "styled-components";
import { FaShoppingBasket } from "react-icons/fa";
import { ProductItem } from "./ProductItem";

const ProductsContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 700px;
  max-height: 500px;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ShoppingCartIcon = styled(FaShoppingBasket)`
  font-size: 36px;
`;

export const Products = ({
  products,
  onAddProduct,
  removeProductHandler,
  deleteProductHandler,
  totalPrice,
}) => {
  return (
    <ProductsContainer>
      <Title>Товары в магазине:</Title>
      <div>
        {products.map((item) => {
          return (
            <ProductItem
              {...item}
              key={item.id}
              onAddProduct={onAddProduct}
              removeProductHandler={removeProductHandler}
              deleteProductHandler={deleteProductHandler}
            />
          );
        })}
      </div>
      <ShoppingCartIcon />
      {totalPrice}
    </ProductsContainer>
  );
};
