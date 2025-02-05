import Header from "../Header/Header";
import ImageSlider from "../Pages/ImageSlider";
import slidestyles from "./ImageSlider.module.css";
import { Link } from "react-router-dom";
import styles from "./Brakes.module.css";
import brakes1 from "../assets/brakes1.png";
import brakes2 from "../assets/brakes2.png";
import brakes3 from "../assets/brakes3.png";

const BRAKES = [brakes1, brakes2, brakes3];
function Brakes() {
  return (
    <div>
      <Header />
      <div className={styles.brakesPage}>
        <button className={styles.backButton}>
          <Link className={styles.backLink} to="/">
            Back
          </Link>
        </button>
        <h1>Brakes</h1>
        <div className={styles.brakesContainer}>
          <h2>Brake Package</h2>
          <h4>Smooth Stops, Safe Drives</h4>
          <div className={slidestyles.imageSlider}>
            <ImageSlider imageUrls={BRAKES} />
          </div>
          <h5>Price: $$$</h5>
          <ul>
            <li>Brake Pad Replacement</li>
            <li>Brake Rotor Resurfacing & Replacement</li>
            <li>Brake Caliper & Hardware Services</li>
          </ul>
          <button className={styles.bookButton}>Book Now</button>
        </div>
      </div>
    </div>
  );
}
export default Brakes;
