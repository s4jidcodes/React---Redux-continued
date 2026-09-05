// Child Component import kiya
import ProductCard from "./ProductCard";

function App() {
  // Products ka data
  const products = [
    {
      id: 1,
      name: "iPhone 16",
      price: 999,
      brand: "Apple",
    },
    {
      id: 2,
      name: "Galaxy S26",
      price: 899,
      brand: "Samsung",
    },
    {
      id: 3,
      name: "Pixel 11",
      price: 799,
      brand: "Google",
    },
  ];

  return (
    <>
      {/* map() har product ke liye ProductCard banayega */}

      {products.map((product) => (
        // Parent se Child ko Props bheje
        
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          brand={product.brand}
        />
      ))}
    </>
  );
}

export default App;
