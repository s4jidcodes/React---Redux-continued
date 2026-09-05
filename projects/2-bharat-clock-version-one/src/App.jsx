import ClockHeading from "./components/ClockHeading";
import Clockmoto from "./components/Clockmoto";
import CurrentTime from "./components/CurrentTime";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <center>
      
      <ClockHeading></ClockHeading>
      <Clockmoto></Clockmoto>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
