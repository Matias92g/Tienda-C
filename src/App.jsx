import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemsListContainer";
import "./App.css"
function App() {
  return <>
    <NavBar />
    <ItemListContainer greetting="Bienvenido a la tienda deportiva Nro 1 del país!"/>
  </>
}

export default App
