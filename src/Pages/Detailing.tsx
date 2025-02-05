import { Link } from "react-router-dom";
import ImageSlider from "../Pages/ImageSlider";
import slidestyles from "./ImageSlider.module.css";
import styles from "./Detailing.module.css";
import Header from "../Header/Header";
import interior1 from "../assets/interior1.png";
import interior2 from "../assets/interior2.png";
import exterior1 from "../assets/exterior1.png";
import exterior2 from "../assets/exterior2.png";

const INTERIOR = [interior1, interior2];
const EXTERIOR = [exterior1, exterior2];
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
          <div className={styles.interiorDetailing}>
            <h2>Interior Package</h2>
            <h4>Deep Clean & Refresh</h4>
            <div className={slidestyles.imageSlider}>
              <ImageSlider imageUrls={INTERIOR} />
            </div>
            <h5>Price:$$$</h5>
            <li>Thorough vacuuming (seats, floor, trunk, & under seats)</li>
            <li> Carpet & upholstery shampooing (stain removal)</li>
            <li>Leather seat cleaning & conditioning (if applicable)</li>
            <li> Dashboard, console, and door panels deep cleaned</li>
            <li>Air vents, cup holders, and crevices detailed</li>
            <li>Interior window & mirror cleaning</li>
            <li> Odor neutralizer treatment</li>
            <button className={styles.bookButton}>Book Now</button>
          </div>
          <div className={styles.exteriorDetailing}>
            <h2>Exterior Package</h2>
            <h4>Shine & Protect</h4>
            <div className={slidestyles.imageSlider}>
              <ImageSlider imageUrls={EXTERIOR} />
            </div>
            <h5>Price:$$$</h5>
            <li>Hand wash & foam bath</li>
            <li>Bug, tar, and road grime removal</li>
            <li>Wheels, tires, and wheel wells deep cleaned</li>
            <li>Tire shine & trim restoration </li>
            <li>Clay bar treatment for paint decontamination</li>
            <li>High-quality wax or ceramic spray application</li>
            <li>Exterior glass & mirror cleaning with water repellent</li>
            <li>Headlight & taillight polishing</li>
            <button className={styles.bookButton}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detailing;
