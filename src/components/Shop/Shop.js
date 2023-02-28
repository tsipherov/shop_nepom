import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../config";
import GoodsList from "../GoodsList/GoodsList";
import Preloader from "../Preloader/Preloader";

const Shop = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
        console.log(res.shop);
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

  return (
    <main className="container content">
      {/* <Cart quantity={order.length} handleBasketShow={handleBasketShow} /> */}
      {loading ? (
        <Preloader />
      ) : (
        // <GoodsList goods={goods} addToBasket={addToBasket} />
        <GoodsList goods={filteredData} />
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
