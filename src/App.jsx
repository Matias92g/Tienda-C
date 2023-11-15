import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemsListContainer";
import { ItemDetailsContainer } from "./components/ItemDetails";
import "./App.css"


function App() {
  return <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailsContainer/>} />
        <Route path="*" element={<>Error 404 💩</>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;