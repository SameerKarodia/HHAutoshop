import Header from "../Header/Header";
import ImageSlider from "../Pages/ImageSlider";
import slidestyles from "./ImageSlider.module.css";
import { Link } from "react-router-dom";
import styles from "./Brakes.module.css";
import brakes1 from "../assets/brakes1.png";
import brakes2 from "../assets/brakes2.png";
import Iframe from "../Iframe";

const BRAKES = [brakes1, brakes2];
<div className={slidestyles.imageSlider}>
  <ImageSlider imageUrls={BRAKES} />
</div>;

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
        <h6>(Parts pricing not included)</h6>

        <div className={styles.brakesContainer}>
          <div className={styles.standardBrakes}>
            <h2>Standard Package</h2>

            <img src={brakes2} alt="brakes" />
            <h5>Starting from $120</h5>
            <ul>
              <li>Brake Pad Resurfacing</li>
              <li>Brake Fluid Top-Up</li>
              <li>Brake system inspection (rotors, calipers, and lines)</li>
            </ul>
            <Iframe url="https://calendly.com/hhautoshop04/brakes" />
          </div>
          <div className={styles.premiumBrakes}>
            <h2>Premium Package</h2>
            <img src={brakes1} alt="brakes" />

            <h5>Starting from $150</h5>
            <ul>
              <li>Full rotor replacement (front and rear as needed)</li>
              <li>Brake pad replacement</li>
              <li>Slider pin service</li>
              <li>Full brake fluid flush</li>
            </ul>
            <Iframe url="https://calendly.com/hhautoshop04/brakes" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Brakes;
