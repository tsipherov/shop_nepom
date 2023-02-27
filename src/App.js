import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { API_KEY, API_URL } from "./config";

function App() {
  console.log("API_KEY >>> ", API_KEY);
  const [data, setData] = useState([]);

  useEffect(() => {
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
      <Header />
      <ul>{shopGoods}</ul>
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
