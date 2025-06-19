import type { Product } from "../../models/product.model";
import CartItem from "../CartItem/CartItem";
import "./CartList.css";

interface CartListProps {
  cartProducts: Product[];
  removeFromCart: (selectedProduct: Product) => void;
}

function CartList({ cartProducts, removeFromCart }: CartListProps) {
  console.log("These are the cart products: ", cartProducts);
  return (
    <>
      {cartProducts.length > 0 ? (
        <ol className="CartList">
          {cartProducts.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
            />
          ))}
        </ol>
      ) : (
        <h3 className="CartList-heading">
          No products in cart... don't be scared of the weather!
        </h3>
      )}
    </>
  );
}

export default CartList;
