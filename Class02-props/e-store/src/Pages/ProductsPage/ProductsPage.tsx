import { useState } from "react";
import Button from "../../Components/Button/Button";
import Counter from "../../Components/Counter/Counter";
import ProductCard from "../../Components/ProductCard/ProductCard";
import type { Product } from "../../models/product.model";
import "./ProductsPage.css";

function ProductsPage() {
  const [showCounter, setShowCounter] = useState(true);
  const productsMock: Product[] = [
    {
      title: "TV",
      description: "A very nice LED TV",
      price: 599.98,
      stock: 1,
    },
    {
      title: "Dishwasher",
      description: "Freedom from the kitchen sink guaranteed",
      price: 299.99,
      stock: 5,
    },
    {
      title: "Fridge",
      description: "You will not resist the urge to open me all the time",
      price: 999.99,
      stock: 0,
    },
  ];

  const printFullName = (fullName: string) => {
    console.log(`Person's full name is: ${fullName}`);
  };

  const onSelectProduct = (product: Product) => {
    console.log("This is the selected product");
    console.log(product);
  };

  return (
    <section className="ProductsPage">
      <h2>Available Products</h2>
      <div className="products-container">
        {productsMock.map((product, i) => (
          <ProductCard
            key={i}
            product={product}
            onSelectProduct={onSelectProduct}
          />
        ))}
      </div>

      <h2>Events In React</h2>
      {/* <button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          console.log(e);

          console.log("Button clicked");
        }}
      >
        click Me
      </button>
      <button
        onClick={() => {
          printFullName("John Doe");
        }}
      >
        Print Full Name
      </button> */}
      <div className="buttons-container">
        <Button
          text="Print Full Name"
          onBtnClick={() => {
            printFullName("John Doe");
          }}
        />
      </div>
      <h2>State/Counter</h2>
      <Button
        text="Tottle Counter"
        onBtnClick={() => {
          setShowCounter((prev) => !prev);
        }}
      />
      {showCounter && <Counter />}
    </section>
  );
}

export default ProductsPage;
