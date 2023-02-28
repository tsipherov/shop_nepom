import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../config";
import BasketList from "../BasketList/BasketList";
import Cart from "../Cart/Cart";
import GoodsList from "../GoodsList/GoodsList";
import Preloader from "../Preloader/Preloader";

const Shop = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setIsBasketShow] = useState(false);
  const [total, setTotal] = useState(0);

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
    console.log("result >>> ", result);
    return result;
  };

  const filteredData = data.filter((item, ind) => ind < 24);

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  };

  const removeFromBasket = (id) => {
    const newOrder = order.filter((item) => item.mainId !== id);
    setOrder(newOrder);
  };

  const incQuantity = (id) => {
    const newOrder = order.map((item) => {
      if (item.mainId === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setOrder(newOrder);
  };

  const decQuantity = (id) => {
    const newOrder = order.map((item) => {
      if (item.mainId === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    const filteringOrder = newOrder.filter((item) => item.quantity !== 0);
    setOrder(filteringOrder);
  };

  const addToBasket = (product) => {
    let findProduct = order.find((itm) => itm.mainId === product.mainId);
    if (findProduct) {
      const newOrder = order.map((itm) => {
        if (itm.mainId === product.mainId) {
          return { ...itm, quantity: itm.quantity + 1 };
        }
        return itm;
      });
      setOrder(newOrder);
    } else {
      setOrder((order) => [...order, { ...product, quantity: 1 }]);
    }
  };

  // console.log("order >>> ", order);
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
      {/* {alertName && <Alert name={alertName} closeAlert={closeAlert} />} */}
    </main>
  );
};

export default Shop;
