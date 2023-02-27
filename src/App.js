import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fortniteapi.io/v2/shop?lang=en", {
      method: "GET",
      headers: {
        Authorization: "dfbc3e00-cd7be9c4-38dea699-a49c9ade",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.shop);
        setData(res.shop);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const filteredData = data.filter((item, ind) => {
    return ind < 10;
  });

  const shopGoods = filteredData.map((item, index) => (
    // const shopGoods = data.map((item, index) => (
    <h4 key={item.mainId}>{`${index + 1} - ${item.displayName}`}</h4>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{shopGoods}</ul>
      </header>
    </div>
  );
}

export default App;
