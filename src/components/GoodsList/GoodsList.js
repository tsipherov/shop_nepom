import React from "react";
import GoodsImem from "../GoodsItem/GoodsItem";

const GoodsList = ({ goods, addToBasket }) => {
  const shopGoods = goods.map((item, index) => (
    <GoodsImem key={item.mainId} item={item} addToBasket={addToBasket} />
  ));
  return <div className="goods">{shopGoods}</div>;
};

export default GoodsList;
