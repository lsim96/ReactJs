import { useCallback, useContext, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchInput from "../../Components/SearchInput/SearchInput";
import "./ProductsPage.css";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { useSearchParams } from "react-router-dom";
import { Page } from "../../Layout/Page/Page";

function ProductsPage() {
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q");

  // const sortBy = searchParams.get("sortBy");
  // if (sortBy === "price") filteredProducts.sort((a, b) => a.price - b.price);

  const onSearch = useCallback(
    (value: string) => {
      setSearchParams((prevParams) => {
        prevParams.set("q", value);
        return prevParams;
      });

      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(value)
        )
      );
    },
    [products, setSearchParams]
  );

  return (
    <Page title="Products">
      <div>
        <SearchInput onSearch={onSearch} defaultValue={query} />
      </div>
      <div className="ProductsPage">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Page>
  );
}

export default ProductsPage;
