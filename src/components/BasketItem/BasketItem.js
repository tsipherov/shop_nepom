// import React, { useContext } from "react";
// import { ShopContext } from "../../context";

const BasketItem = ({
  removeFromBasket,
  incQuantity,
  decQuantity,
  mainId,
  displayName,
  quantity,
  regularPrice,
}) => {
  // const { total, loading } = useContext(ShopContext);
  return (
    <li className="collection-item">
      {displayName}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(mainId)}
      >
        remove
      </i>{" "}
      x{quantity}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(mainId)}
      >
        add
      </i>{" "}
      = {regularPrice * quantity} руб.
      <span
        className="secondary-content"
        onClick={() => removeFromBasket(mainId)}
      >
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
};

export default BasketItem;
