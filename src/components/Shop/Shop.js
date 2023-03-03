import { useContext, useEffect } from "react";
import { API_KEY, API_URL } from "../../config";
import { ShopContext } from "../../context";
import Alert from "../Alert/Alert";
import BasketList from "../BasketList/BasketList";
import Cart from "../Cart/Cart";
import GoodsList from "../GoodsList/GoodsList";
import Preloader from "../Preloader/Preloader";

const Shop = () => {
  const { loading, alertName, isBasketShow, setData, setLoading } =
    useContext(ShopContext);

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
        setLoading(false);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};

export default Shop;
