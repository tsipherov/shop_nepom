export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };

    case "DECREMENT_QUANTITY": {
      const newOrder = state.order.map((item) => {
        if (item.mainId === payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      const filteringOrder = newOrder.filter((item) => item.quantity !== 0);
      return {
        ...state,
        order: filteringOrder,
      };
    }

    case "INCREMENT_QUANTITY": {
      const newOrder = state.order.map((item) => {
        if (item.mainId === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return {
        ...state,
        order: newOrder,
      };
    }

    case "REMOVE_FROM_BASKET":
      const newOrder = state.order.filter((item) => item.mainId !== payload.id);
      // setOrder(newOrder);
      return {
        ...state,
        order: newOrder,
      };

    case "BASKET_SHOW":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case "ADD_TO_BASKET": {
      const product = payload;
      let findProduct = state.order.find(
        (itm) => itm.mainId === product.mainId
      );
      if (findProduct) {
        const newOrder = state.order.map((itm) => {
          if (itm.mainId === product.mainId) {
            return { ...itm, quantity: itm.quantity + 1 };
          }
          return itm;
        });
        return { ...state, order: newOrder, alertName: product.displayName };
      } else {
        return {
          ...state,
          order: [...state.order, { ...product, quantity: 1 }],
          alertName: product.displayName,
        };
      }
    }

    default:
      return state;
  }
};
