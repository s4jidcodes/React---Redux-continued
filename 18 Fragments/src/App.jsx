import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Cpu" },
  { id: 4, name: "Charger" },
  { id: 5, name: "Adapter" },
];

function App() {
  return (
    <>
      {products.map((item) => (
        <h2 key={item.id}>{item.name}</h2>
      ))}
    </>
  );
}
export default App;
