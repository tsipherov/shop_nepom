import { useEffect, useContext } from "react";
import BasketItem from "../BasketItem/BasketItem";
import { ShopContext } from "../../context";

const BasketList = () => {
  const { total, order, handleBasketShow, setTotal } = useContext(ShopContext);
  const getTotal = (order) => {
    const result = order.reduce(
      (acc, itm) => acc + itm.regularPrice * itm.quantity,
      0
    );
    return result;
  };

  useEffect(() => {
    setTotal(getTotal(order));
    //eslint-disable-next-line
  }, [order]);
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.mainId} {...item} />)
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость: {total} грн.</li>
      <li className="collection-item">
        <button className="btn btn-small">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
};

export default BasketList;
