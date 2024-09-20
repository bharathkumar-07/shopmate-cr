import { CartCard } from "../Components"
import { useTitle } from "../Hooks/useTitle"

export const Cart = () => {

  useTitle("Cart");

  const products = [
    {'id':1 , "name":"iphone16pro", "price":112000 , "image": "/assets/images/iphone16pro.jpeg" },
    {'id':2, "name":"iphone16", "price":99000 , "image": "/assets/images/iphone16.jpeg" },
  ]

  return (
    <main>
      <section className="cart">
        <h1> Cart Items: {products.length} </h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product}/>
        ))}
      
      </section>
    </main>
  )
}
