import { Link } from "react-router-dom";
import ImageSlider from "../Pages/ImageSlider";
import slidestyles from "./ImageSlider.module.css";
import styles from "./Detailing.module.css";
import Header from "../Header/Header";
import interior10 from "../assets/interior10.jpg";
import interior11 from "../assets/interior11.jpg";
import interior12 from "../assets/interior12.jpg";

import bronzeCard from "../assets/bronzeCard.png";
import silverCard from "../assets/silvercard.png";
import goldCard from "../assets/goldcard.png";

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
        <h1>Detailing</h1>

        <div className={styles.detailingContainer}>
          <div className={styles.bronzeDetailing}>
            <img src={bronzeCard} />
          </div>

          <div className={styles.silverDetailing}>
            <img src={silverCard} />
          </div>

          <div className={styles.goldDetailing}>
            <img src={goldCard} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detailing;
