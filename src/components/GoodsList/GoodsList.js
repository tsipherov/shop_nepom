import React from "react";
import GoodsImem from "../GoodsItem/GoodsItem";

const GoodsList = ({ goods }) => {
  const shopGoods = goods.map((item, index) => (
    <GoodsImem item={item} key={item.mainId} />
  ));
  return <div className="goods">{shopGoods}</div>;
};

export default GoodsList;
