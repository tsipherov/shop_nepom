import { useContext } from "react";
import { ShopContext } from "../../context";
import GoodsImem from "../GoodsItem/GoodsItem";

const GoodsList = () => {
  const { data } = useContext(ShopContext);
  const filteredData = data.slice(0, 24);
  const listGoods = filteredData.map((item) => (
    <GoodsImem key={item.mainId} product={item} />
  ));
  return <div className="goods">{listGoods}</div>;
};

export default GoodsList;
