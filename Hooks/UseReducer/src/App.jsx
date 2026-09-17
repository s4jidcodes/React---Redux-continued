import { useReducer } from "react";

const emptyData = {
  name: "",
  Password: "",
  email: "",
  city: "",
  address: "",
};

const reducer = (data, action) => {
  switch (action.type) {
    case "name":
      return { ...data, name: action.val };
    case "Password":
      return { ...data, Password: action.val };
    case "email":
      return { ...data, email: action.val };
    case "city":
      return { ...data, city: action.val };
    case "address":
      return { ...data, address: action.val };
    default:
      return data;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, emptyData);

  return (
    <div>
      <h1>Use Reducer</h1>

      <input
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: "name" })}
        placeholder="name"
      />
      <br />

      <input
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: "Password" })}
        placeholder="password"
      />
      <br />

      <input
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: "email" })}
        placeholder="email"
      />
      <br />

      <input
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: "city" })}
        placeholder="enter city"
      />
      <br />

      <input
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: "address" })}
        placeholder="enter Address"
      />

      <button>Add Details</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
