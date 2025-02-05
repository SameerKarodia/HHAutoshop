import Header from "../Header/Header";
import ImageSlider from "../Pages/ImageSlider";
import slidestyles from "./ImageSlider.module.css";
import { Link } from "react-router-dom";
import styles from "./Lights.module.css";
import lights1 from "../assets/lights1.png";
import lights2 from "../assets/lights2.png";
import lights3 from "../assets/lights3.png";

const LIGHTS = [lights1, lights2, lights3];
function Lights() {
  return (
    <div>
      <Header />
      <div className={styles.lightsPage}>
        <button className={styles.backButton}>
          <Link className={styles.backLink} to="/">
            Back
          </Link>
        </button>
        <h1>Lights</h1>
        <div className={styles.lightsContainer}>
          <h2>Lights Package</h2>
          <h5>Light the Way, Upgrade Today</h5>
          <div className={slidestyles.imageSlider}>
            <ImageSlider imageUrls={LIGHTS} />
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

export default Lights;
