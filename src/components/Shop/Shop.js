import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../config";
import Cart from "../Cart/Cart";
import GoodsList from "../GoodsList/GoodsList";
import Preloader from "../Preloader/Preloader";

const Shop = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    // setLoading(true);
    fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.shop);
        setData(res.shop);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  const filteredData = data.filter((item, ind) => {
    return ind < 10;
  });

  const handleBasketShow = () => {};

  const addToBasket = (product) => {
    let findProduct = order.find((itm) => itm.mainId === product.mainId);
    if (findProduct) {
      const newOrder = order.map((itm) => {
        if (itm.mainId === product.mainId) itm.quantity = itm.quantity + 1;
        return itm;
      });
      setOrder(newOrder);
    } else {
      setOrder((order) => [...order, { ...product, quantity: 1 }]);
    }
  };

  console.log("order >>> ", order);
  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={filteredData} addToBasket={addToBasket} />
      )}
      {/* {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />} */}
    </main>
  );
};

export default Shop;
