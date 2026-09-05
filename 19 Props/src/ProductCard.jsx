function ProductCard(props) {
  // Parent se aaya hua data
  // props object ke andar store hota hai.

  return (
    <>
      <h2>{props.name}</h2>

      <p>Brand : {props.brand}</p>

      <p>Price : ${props.price}</p>
    </>
  );
}

export default ProductCard;
