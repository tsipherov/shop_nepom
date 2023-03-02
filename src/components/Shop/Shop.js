import { useContext, useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../config";
import { ShopContext } from "../../context";
import Alert from "../Alert/Alert";
import BasketList from "../BasketList/BasketList";
import Cart from "../Cart/Cart";
import GoodsList from "../GoodsList/GoodsList";
import Preloader from "../Preloader/Preloader";

const Shop = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const {
    order,
    alertName,
    isBasketShow,
    closeAlert,
    handleBasketShow,
    incQuantity,
    decQuantity,
    addToBasket,
    removeFromBasket,
  } = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.shop);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setTotal(getTotal(order));
  }, [order]);

  const getTotal = (list) => {
    const result = list.reduce(
      (acc, itm) => acc + itm.regularPrice * itm.quantity,
      0
    );
    return result;
  };

  const filteredData = data.filter((item, ind) => ind < 24);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={filteredData} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          total={total}
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};

export default Shop;
