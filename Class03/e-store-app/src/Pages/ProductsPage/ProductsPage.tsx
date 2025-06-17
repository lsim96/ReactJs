import { useEffect, useState } from "react";
import Button from "../../Components/Button/button";
import ProductsList from "../../Components/ProductsList/ProductsList";
import "./ProductsPage.css";
import type { Product } from "../../models/product.model";
import productsJson from "../../data/products.json";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";

function ProductsPage() {
  // console.log("products page rerendered");

  const [products, setProducts] = useState<Product[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [isInfoShown, setIsInfoShown] = useState(true);

  //With empty array will only run once, same as componentDidMount

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsJson);
    }, 1500);
  }, []);

  //First user effect only runs when isInfoShwonChanges
  useEffect(() => {
    console.log("Is info shown changed, use effect executed");
  }, [isInfoShown]);

  //Second use effect only runs when selectedProductChanges
  useEffect(() => {
    console.log("Is selected product changed, use effect executed");
  }, [selectedProduct]);

  //Never set a dependency of a useEffect in the useEffect callback, infinite loops breaks the app
  // useEffect(() => {
  //   setIsInfoShown((prev) => !prev);
  // }, [isInfoShown]);

  const onSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <section className="ProductsPage">
      <div className="buttons-container">
        <Button
          text="Toggle Info Panel"
          onBtnClick={() => {
            console.log("Toggle info panel button clicked");
            setIsInfoShown((prev) => !prev);
          }}
        />
        <Button
          text="Fetch Products"
          onBtnClick={() => {
            console.log("Toggle fetch products button clicked");
            setProducts(productsJson);
          }}
        />
      </div>
      <div className="content">
        {/* {ProductsList} */}
        <ProductsList products={products} onSelectProduct={onSelectProduct} />
        {/* {ProductsInfo} */}

        {isInfoShown && <ProductInfo selectedProduct={selectedProduct} />}
      </div>
    </section>
  );
}

export default ProductsPage;
