import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemsListContainer";
import { ItemDetailsContainer } from "./components/ItemDetails";
import "./App.css"
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./components/Cart";

function App() {
  return <>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailsContainer />} />
          <Route path="*" element={<>Error 404 💩</>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </>
}

export default App;