import { useContext, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchInput from "../../Components/SearchInput/SearchInput";
import "./ProductsPage.css";
import { ProductsContext } from "../../Contexts/ProductsContext";

function ProductsPage() {
  const { products } = useContext(ProductsContext);

  const [filteredProducts, setFilteredProducts] = useState(products);

  // const sortBy = searchParams.get("sortBy");

  // if (sortBy === "price") {
  //   filteredProducts.sort((a, b) => a.price - b.price);
  // }

  const onSearch = (value: string) => {
    setFilteredProducts(
      products.filter((product) => product.title.toLowerCase().includes(value))
    );
  };

  return (
    <section className="page ProductsPage">
      <div className="page-heading">
        <h2>Products</h2>
      </div>
      <SearchInput onSearch={onSearch} />
      <div>
        <div className="card-container">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;
