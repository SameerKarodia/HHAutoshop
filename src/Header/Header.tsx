import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menutoggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <a href="#">
        <h1>HH Autoshop</h1>
      </a>
      <nav className={styles.nav}>
        <button onClick={menutoggle} className={styles.menutoggle}>
          ☰
        </button>
        <div className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
          <Link to="/Detailing">Detailing</Link>
          <Link to="/Brakes">Brakes</Link>
          <Link to="/Lights">Lights</Link>
          <Link to="/Tuneups">Tuneups</Link>
          <Link to="/OilChange">Oil Change</Link>
        </div>
      </nav>
      <nav className={styles.navBig}>
        <Link to="/Detailing">Detailing</Link>
        <Link to="/Brakes">Brakes</Link>
        <Link to="/Lights">Lights</Link>
        <Link to="/Tuneups">Tuneups</Link>
        <Link to="/OilChange">Oil Change</Link>
      </nav>
    </header>
  );
}
export default Header;
