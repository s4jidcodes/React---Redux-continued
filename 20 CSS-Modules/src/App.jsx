// CSS Module Import ki

import styles from "./Button.module.css"; //button.module.css

function App() {
  return (
    // styles.button
    // Automatically unique class ban jayegi

    <button className={styles.button}>Subscribe</button>
  );
}

export default App;

