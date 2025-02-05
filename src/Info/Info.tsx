import instaLogo from "../assets/instaLogo4.png";
import mapsLogo from "../assets/mapsLogo4.png";
import styles from "./Info.module.css";

function Info() {
  return (
    <div>
      <div className={styles.infoContainer}>
        <div className={styles.infoBox}>
          <h1>HH Autoshop</h1>
          <h4>Auto & Performance</h4>
          <h4>Tires - Lights - Brakes - Tune Ups</h4>
          <h4>Auto Detailing</h4>
          <h4>Scarborough, Ontario</h4>
          <div className={styles.links}>
            <a
              className={styles.instaLogo}
              href="https://www.instagram.com/hh_autoshop/"
            >
              <img src={instaLogo} />
            </a>

            <a
              className={styles.mapsLogo}
              href="https://maps.app.goo.gl/TCjGSPmmoG6p4qMQ9"
            >
              <img src={mapsLogo} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info;
