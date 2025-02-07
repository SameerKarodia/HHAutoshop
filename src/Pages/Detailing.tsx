import { Link } from "react-router-dom";
import ImageSlider from "../Pages/ImageSlider";
import slidestyles from "./ImageSlider.module.css";
import styles from "./Detailing.module.css";
import Header from "../Header/Header";
import interior1 from "../assets/interior1.png";
import interior2 from "../assets/interior2.png";
import exterior1 from "../assets/exterior1.png";
import exterior2 from "../assets/exterior2.png";

// const INTERIOR = [interior1, interior2];
// <div className={slidestyles.imageSlider}>
//               <ImageSlider imageUrls={INTERIOR} />
//             </div>
// const EXTERIOR = [exterior1, exterior2];
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
            <h5>Price:$$$</h5>
            <li>Exterior Hand Wash & Dry</li>
            <li>Interior Vacuuming (Seats and Carpets)</li>
            <li>Air Freshener Application</li>
            <button className={styles.bookButton}>Book Now</button>
          </div>
          <div className={styles.silverDetailing}>
            <h2>Silver Package</h2>
            <h4>Deep Clean & Protect</h4>
            <h5>Price:$$$</h5>
            <li>
              Interior Dusting & Wipe down (Door Jams, Dashboard, Console)
            </li>
            <li>Interior Deep Vacuuming (Including Trunk) </li>
            <li>Wheels, Tires, and Wheel Wells Deep Cleaned</li>
            <li>Tire Shine Application </li>
            <li> + Bronze Package Services</li>
            <button className={styles.bookButton}>Book Now</button>
          </div>
          <div className={styles.goldDetailing}>
            <h2>Gold Package</h2>
            <h4>Full Detail and Restoration</h4>
            <h5>Price:$$$</h5>
            <li>Streak-Free Window Cleaning (Inside & Out)</li>
            <li>Headlight & Taillight Polishing</li>
            <li>Full Interior Shampoo</li>
            <li>Bug, Tar, and Road Grime Removal</li>
            <li>Clay Bar Treatment for Paint Decontamination</li>
            <li>High-Quality Wax or Ceramic Spray Application</li>
            <li> + Silver Package Services</li>
            <button className={styles.bookButton}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detailing;
