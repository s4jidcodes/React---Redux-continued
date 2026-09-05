import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  // Stores the current calculator display value
  const [calVal, setCalVal] = useState("");

  // This function runs whenever any calculator button is clicked
  const onButtonClick = (buttonText) => {
    // Clear the complete calculator display
    if (buttonText === "C") {
      setCalVal("");
    }

    // Delete the last character from the display
    else if (buttonText === "DEL") {
      setCalVal((prevValue) => prevValue.slice(0, -1));
    }

    // Calculate the expression when "=" is pressed
    else if (buttonText === "=") {
      try {
        // If display is empty, do nothing
        if (calVal === "") {
          return;
        }

        // Evaluate the mathematical expression
        const result = eval(calVal);

        // Check whether the result is a valid number
        if (!Number.isFinite(result)) {
          setCalVal("Error");
        } else {
          setCalVal(String(result));
        }
      } catch (error) {
        // If the expression is invalid, show Error
        setCalVal("Error");
      }
    }

    // If Error is currently displayed,
    // start a new calculation when user presses a button
    else {
      const newDisplayValue = calVal + buttonText;

      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      {/* 
        Display component receives the current calculator value
        through the displayValue prop.
      */}
      <Display displayValue={calVal} />

      {/* 
        ButtonsContainer receives onButtonClick as a prop.
        Whenever a button is clicked, this function is called.
      */}
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;



 /*
 Button click
     ↓
onButtonClick(buttonText)
     ↓
check button
     ↓
setCalVal()
     ↓
State changes
     ↓
App re-renders
     ↓
Display gets new value through props*/