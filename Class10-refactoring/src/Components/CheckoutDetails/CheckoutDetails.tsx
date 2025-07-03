import Button from "../Button/Button";
import { useAppSelector } from "../../utils/hooks";
import { selectProductsInCart, selectTotalAmount } from "../../state/selectors";

interface CheckoutDetailsProps {
  onOrderSubmit: () => void;
}

export function CheckoutDetails({ onOrderSubmit }: CheckoutDetailsProps) {
  const cartProducts = useAppSelector(selectProductsInCart);

  const total = useAppSelector(selectTotalAmount);

  return (
    <div className="CheckoutDetails">
      <ul className="checkout-list">
        {cartProducts.map((product, i) => (
          <li key={product.id}>
            <strong>{i + 1}.</strong> <span>{product.title}</span>
            <span className="item-quantity">
              ${product.price} X {product.quantity}
            </span>
            <span className="item-total">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="total">
        <div className="total-list">
          <div>
            Total: <strong>${total.toFixed(2)}</strong>
          </div>
          <div>
            Shipping: <strong>$39.99</strong>
          </div>
          <div>
            Total with shipping: <strong>${(total + 39.99).toFixed(2)}</strong>
          </div>
          <Button
            onBtnClick={() => {
              onOrderSubmit();
            }}
          >
            Submit Order
          </Button>
        </div>
      </div>
    </div>
  );
}
