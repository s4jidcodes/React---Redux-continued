import { useContext } from "react";
import { SubjectContext } from "./ContextData";

export default function Subjectt() {
  const Subject = useContext(SubjectContext); // usecontext ki help se hum subject mai print karnege other component ki values 
  return (
    <div style={{ backgroundColor: "purple", padding: 11 }}>
      <h2> Subject is : {Subject}</h2>
    </div>
  );
}
