import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 2px solid #ddd;
  margin: 10px;
  text-align: center;
`;

const ProductInfo = styled.div`
  flex: 1;
  cursor: pointer;
`;

const ProductName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductPrice = styled.div`
  font-size: 16px;
`;

const ProductImage = styled.img`
  max-width: 110px;
  max-height: 110px;
  margin-right: 50px;
`;
const ProductButton = styled.button`
  width: 30px;
  height: 25px;
  text-aling: center;
  background-color: #0074d2;
  border-color: white;
  border-radius: 3px;
  margin-right: 5px;
`;

const ProductRemoveButton = styled.button`
  width: max;
  height: 30px;
  color: white;
  background-color: #e8465b;
  border-color: white;
  border-radius: 3px;
  margin-left: 15px;
`;
export const ProductItem = ({
  name,
  price,
  src,
  alt,
  onAddProduct,
  removeProductHandler,
  deleteProductHandler,
  id,
  quantity,
}) => {
  return (
    <ProductContainer>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price} сом</ProductPrice>
      </ProductInfo>
      <ProductImage src={src} alt={alt} />

      <ProductButton onClick={() => onAddProduct(id)}> +</ProductButton>
      <div>{quantity}</div>
      <ProductButton onClick={() => removeProductHandler(id)}>-</ProductButton>
      <ProductRemoveButton onClick={() => deleteProductHandler(id)}>
        remove
      </ProductRemoveButton>
    </ProductContainer>
  );
};
