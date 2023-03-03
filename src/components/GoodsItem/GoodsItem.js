import { useContext } from "react";
import { ShopContext } from "../../context";

const GoodsImem = ({ product }) => {
  const {
    mainId,
    displayName,
    price: { regularPrice },
    displayAssets: [{ full_background }],
    displayDescription,
  } = product;

  const { addToBasket } = useContext(ShopContext);

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
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              regularPrice,
            })
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
