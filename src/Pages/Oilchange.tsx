import Header from "../Header/Header";
import Booksy from "../Services/Booksy";
import styles from "./Oilchange.module.css";
import { Link } from "react-router-dom";
import bmwoilchangePic from "../assets/bmwoilchangePic.png";

function Oilchange() {
  return (
    <div>
      <Booksy />
      <Header />
      <div className={styles.oilchangePage}>
        <button className={styles.backButton}>
          <Link className={styles.backLink} to="/">
            Back
          </Link>
        </button>

        <div className={styles.oilchangeContainer}>
          <h1>Oil Change</h1>
          <div className={styles.standardOilchange}>
            <h2>Standard Package</h2>
            <img src={bmwoilchangePic} alt="brakes" />
            <h5>Price: $$$</h5>
            <ul>
              <li>Engine Oil Replacement (Conventional, Synthetic, etc)</li>
              <li>High-Quality Oil Filter Replacement</li>
              <li>Fluid Level Check & Top-Off </li>
            </ul>

            <button className={styles.bookButton}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Oilchange;
