import Header from "../Header/Header";
import ImageSlider from "../Pages/ImageSlider";
import slidestyles from "./ImageSlider.module.css";
import { Link } from "react-router-dom";
import styles from "./Lights.module.css";
import lights1 from "../assets/lights1.png";
import lights2 from "../assets/lights2.png";
import lights3 from "../assets/lights3.png";
import BookingWidget from "../BookingWidget";

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
          <h5>Starting from $20</h5>
          <ul>
            <li>LED High Beams</li>
            <li>LED Low Beams</li>
            <li>LED Fog Lights</li>
          </ul>
        </div>
      </div>
      <BookingWidget />
    </div>
  );
}

export default Lights;
