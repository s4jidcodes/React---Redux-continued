import { useState } from "react";
import College from "./college";
import { SubjectContext } from "./ContextData";

export default function App() {
  const [Subject, Setsubject] = useState("");
  return (
    <div style={{ textAlign: "left", backgroundColor: "yellow", padding: 10 }}>
      <SubjectContext.Provider value={Subject}>
        <select
          defaultValue={Subject}
          onChange={() => Setsubject(event.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>
        <h1>Context API</h1>
        <button onClick={() => Setsubject("")}>Clear Subject</button>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}
