import logo from "../assets/logo.png";
import styles from "./Footer.module.css";
import bottomWave from "../assets/bottomWave.svg";

function Footer() {
  return (
    <div className={styles.footerBox}>
      <div className={styles.waveContainer}>
        <img src={bottomWave} alt="Wave Divider" style={{ width: "100%" }} />
      </div>
      <img className={styles.HHlogo} src={logo} />
      <h6>HH Autoshop @ 2025</h6>
    </div>
  );
}

export default Footer;
