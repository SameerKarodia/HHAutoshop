import Header from "../Header/Header";
import styles from "./Tuneups.module.css";
import { Link } from "react-router-dom";
import sparkplugsPic from "../assets/sparkplugsPic.png";

function Tuneups() {
  return (
    <div>
      <Header />
      <div className={styles.tuneupsPage}>
        <button className={styles.backButton}>
          <Link className={styles.backLink} to="/">
            Back
          </Link>
        </button>

        <div className={styles.tuneupsContainer}>
          <h1>Tune Ups</h1>
          <div className={styles.standardTuneups}>
            <h2>Standard Package</h2>
            <h4>(Depends on needs)</h4>
            <img src={sparkplugsPic} alt="brakes" />
            <h5>Price: $$$</h5>
            <ul>
              <li>Spark Plug Replacement </li>
              <li> Ignition Coil Replacement</li>
              <li>Air Filter Replacement</li>
              <li>Fuel Filter Replacement & Basic Maintenance</li>
            </ul>
            <button className={styles.bookButton}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tuneups;
