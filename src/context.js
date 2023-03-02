import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialValue = {
  data: [],
  loading: true,
  order: [],
  isBasketShow: false,
  total: 0,
  alertName: "",
};

export const ShopContext = createContext();
export const ShopProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialValue);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "BASKET_SHOW" });
  };

  value.addToBasket = (product) => {
    dispatch({ type: "ADD_TO_BASKET", payload: product });
  };

  value.decQuantity = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id } });
  };

  value.incQuantity = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id } });
  };

  value.removeFromBasket = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id } });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
