import { Link } from "react-router-dom";
import ImageSlider from "../Pages/ImageSlider";
import slidestyles from "./ImageSlider.module.css";
import styles from "./Detailing.module.css";
import Header from "../Header/Header";
import interior10 from "../assets/interior10.jpg";
import interior11 from "../assets/interior11.jpg";
import interior12 from "../assets/interior12.jpg";
import exterior11 from "../assets/exterior11.jpg";
import engine10 from "../assets/engine10.png";
import Iframe from "../Iframe";

const INTERIOR = [interior10, interior11, interior12];
<div className={slidestyles.imageSlider}>
  <ImageSlider imageUrls={INTERIOR} />
</div>;

function Detailing() {
  return (
    <div>
      <Header />
      <div className={styles.detailingPage}>
        <button className={styles.backButton}>
          <Link className={styles.backLink} to="/">
            Back
          </Link>
        </button>
        <div className={styles.detailingContainer}>
          <h1>Detailing</h1>
          <div className={styles.bronzeDetailing}>
            <h2>Bronze Package</h2>
            <h4>Basic Clean & Shine</h4>
            <img src={exterior11} alt="exterior" />
            <h5>Price:$$$</h5>
            <ul>
              <li>Exterior Hand Wash & Dry</li>
              <li>Interior Vacuuming (Seats and Carpets)</li>
              <li>Air Freshener Application</li>
            </ul>
            <Iframe />

            {/* <button className={styles.bookButton}>Book Now</button> */}
          </div>
          <div className={styles.silverDetailing}>
            <h2>Silver Package</h2>
            <h4>Deep Clean & Protect</h4>
            <div className={slidestyles.imageSlider}>
              <ImageSlider imageUrls={INTERIOR} />
            </div>
            <h5>Price:$$$</h5>
            <ul>
              <li>
                Interior Dusting & Wipe down (Door Jams, Dashboard, Console)
              </li>
              <li>Interior Deep Vacuuming (Including Trunk) </li>
              <li>Wheels, Tires, and Wheel Wells Deep Cleaned</li>
              <li>Tire Shine Application </li>
              (Includes Bronze Package Services)
            </ul>
            <Iframe />

            {/* <button className={styles.bookButton}>Book Now</button> */}
          </div>
          <div className={styles.goldDetailing}>
            <h2>Gold Package</h2>
            <h4>Full Detail and Restoration</h4>
            <img src={engine10} alt="engine" />
            <h5>Price:$$$</h5>
            <ul>
              <li>Streak-Free Window Cleaning (Inside & Out)</li>
              <li>Headlight & Taillight Polishing</li>
              <li>Full Interior Shampoo</li>
              <li>Steam Cleaning</li>
              <li>Bug, Tar, and Road Grime Removal</li>
              <li>Paint Correction</li>
              <li>Clay Bar Treatment for Paint Decontamination</li>
              <li>Engine Bay Cleaning </li>(Silver Package Services Included)
            </ul>
            {/* <div className={styles.bookButtontest}>
              <Iframe />
            </div> */}
            <Iframe />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detailing;
