import classes from "./ProductList.module.css";

function ProductList() {
  console.log(classes);

  const productsListJsx = (
    <ul className={classes.list}>
      <li>Product One</li>
      <li>Product Two</li>
      <li>Product Three</li>
    </ul>
  );

  const itemListJsx = (
    <ul className={classes.list}>
      <li>Item Ibe</li>
      <li>Item Two</li>
      <li>Item three</li>
    </ul>
  );

  const areProductsShwon = true;

  return (
    <>
      {areProductsShwon ? <h3>Products List</h3> : <h3>Items List</h3>}

      {areProductsShwon ? productsListJsx : itemListJsx}
    </>
  );
}

export default ProductList;
