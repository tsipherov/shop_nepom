import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { ShopProvider } from "./context";

function App() {
  return (
    <>
      <Header />
      <ShopProvider>
        <Shop />
      </ShopProvider>
      <Footer />
    </>
  );
}

export default App;
