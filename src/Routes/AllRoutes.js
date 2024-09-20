import { Routes,Route } from "react-router-dom"
import { Home,Cart } from "../pages"

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
           <Route path="/" element ={<Home />}/> 
           <Route path="/Cart" element ={<Cart />}/> 
        </Routes>
    </div>
  )
}
