import logo from "../assets/logo.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerBox}>
      <img className={styles.HHlogo} src={logo} />
      <h6>HH Autoshop @ 2025</h6>
    </div>
  );
}

export default Footer;
