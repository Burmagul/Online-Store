import { useReducer } from "react";
import { Products } from "./components/Products";
import { AppHeader } from "./components/AppHeader";
import Cart from "./components/Cart";

const initProducts = {
  products: [
    {
      id: 1,
      name: "Chanel 1",
      price: 16500,
      src: "https://parfumer.kg/wp-content/uploads/2013/11/CHN-Chance-Eau-Tendre-L-EDT-50.jpg",
      alt: "Parfum",
      quantity: 0,
    },
    {
      id: 2,
      name: "Gucci 2",
      price: 54000,
      src: "https://5.imimg.com/data5/ANDROID/Default/2021/4/DA/WD/EL/33576657/product-jpeg.jpg",
      alt: "HandBags",
      quantity: 0,
    },
    {
      id: 3,
      name: "Prada 3",
      price: 24690,
      src: "https://static.insales-cdn.com/images/products/1/3188/616238196/msg-1528761769-2242.jpg",
      alt: "Brushed leather loafers",
      quantity: 0,
    },
  ],
  cart: [],
  totalQuantity: 0,
};

localStorage.setItem("Products", JSON.stringify(initProducts));
const initProductsTwo = JSON.parse(localStorage.getItem("initProducts"));
console.log(initProductsTwo);

function productReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const productToAdd = state.products.find((item) => {
        return item.id === +action.payload;
      });
      if (productToAdd) {
        productToAdd.quantity += 1;
        const itemIncart = state.cart.find((item) => {
          return item.id === +productToAdd.id;
        });
        if (itemIncart) {
          console.log(itemIncart);
          itemIncart.quantity += 1;
          itemIncart.totalPrice = itemIncart.quantity * itemIncart.price;
        } else {
          state.cart.push({
            ...productToAdd,
            quantity: 1,
            totalPrice: productToAdd.price,
          });
        }
        state.totalQuantity += 1;

        return {
          ...state,
          cart: [...state.cart],
        };
      }

      return state;
    case "REMOVE":
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.price;
          }

          if (state.totalQuantity > 0) {
            state.total -= 1;
          }
        }
        return item;
      });
      const upDatedProduct = state.products.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.price;
          }

          if (state.totalQuantity > 0) {
            state.total -= 1;
          }
        }
        return item;
      });

      const filteredCart = state.cart.filter((item) => item.quantity);
      if (filteredCart) {
        filteredCart.quantity -= 1;
      }
      return {
        ...state,
        cart: updatedCart,
        Products: upDatedProduct,
      };

    case "DELETE":
      let deleteId = state.cart.filter((item) => item.id !== action.payload);
      const deleteQuantity = state.products.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: 0 };
        }
        return item;
      });

      return {
        ...state,
        cart: deleteId,
        products: deleteQuantity,
      };

    default:
      return state;
  }
}

const App = () => {
  const [products, dispatch] = useReducer(productReducer, initProducts);

  function addProductHandler(id) {
    dispatch({ type: "ADD_PRODUCT", payload: id });
  }

  function removeProductHandler(id) {
    dispatch({ type: "REMOVE", payload: id });
  }
  function deleteProductHandler(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  let summa = products.cart.reduce((sum, sub) => {
    return sum + sub.totalPrice;
  }, 0);

  return (
    <div>
      <AppHeader />
      <Cart
        cartProducts={products.cart}
        deleteProductHandler={deleteProductHandler}
      />
      <Products
        products={products.products}
        onAddProduct={addProductHandler}
        removeProductHandler={removeProductHandler}
        deleteProductHandler={deleteProductHandler}
        quantity={products.quantity}
        totalPrice={summa}
      />
    </div>
  );
};

export default App;
