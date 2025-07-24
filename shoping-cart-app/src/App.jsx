import { Route, Routes } from "react-router-dom"
import Menu from "./Component/Menu"
import Home from "./Component/Home"
import Cart from "./Component/Cart"

function App ()
{
  return<>
  <Menu/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Cart" element={<Cart/>}></Route>
  </Routes>
  </>
}
export default App;
