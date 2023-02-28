import React from "react";

const GoodsImem = ({ item }) => {
  const {
    mainId,
    displayName,
    firstReleaseDate,
    price: { regularPrice, finalPrice },
    displayAssets: [{ background, full_background }],
    displayDescription,
  } = item;

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={
            () => {}
            //   addToBasket({
            //     mainId,
            //     displayName,
            //     regularPrice,
            //   })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {regularPrice} грн.
        </span>
      </div>
    </div>
  );
};

export default GoodsImem;
